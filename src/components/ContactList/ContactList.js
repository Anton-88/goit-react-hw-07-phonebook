import { PropTypes } from "prop-types";
import styles from "./ContactList.module.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { getFilterValue } from "../../redux/phonebook/selectors";
import Filter from "../Filter/Filter";
import Loader from "../Loader/Loader";
//************************* */
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from "../../redux/phonebook/mockApi";
//************************* */

function ContactList() {
  const filterVal = useSelector(getFilterValue);

  const { data: contacts, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <Filter />
      {isLoading && <Loader />}
      {contacts && !isLoading && (
        <ul className={styles.contact_list}>
          {contacts
            .filter((contact) =>
              contact.name.toLowerCase().includes(filterVal.toLowerCase())
            )
            .map(({ name, phone, id }) => (
              <li className={styles.contact_list_item} key={uuidv4()}>
                <p>
                  {name}: {phone}
                </p>
                <button
                  className={styles.contact_list_button}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete number
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default ContactList;

ContactList.propTypes = {
  state: PropTypes.arrayOf(PropTypes.any).isRequired,
  onListChange: PropTypes.func.isRequired,
};
