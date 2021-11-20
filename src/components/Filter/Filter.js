import React from "react";
import { PropTypes } from "prop-types";
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterValue } from "../../redux/phonebook/actions";
import { getFilterValue } from "../../redux/phonebook/selectors";
import { useGetContactsQuery } from "../../redux/phonebook/mockApi";

function Filter() {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onFilterChange = (e) => dispatch(filterValue(e.target.value));
  // const { data: totalContacts } = useGetContactsQuery();

  return (
    <>
      <h2 className={styles.header}>Contacts</h2>
      {/* {totalContacts.length > 0 ? (
                <h4 className={styles.contacts_amount}>
                    (there are {totalContacts.length} contacts in your phonebook)
                </h4>
            ) : (
                <h4 className={styles.contacts_amount_zero}>
                    (there are no contacts in your phonebook, please add some)
                </h4>
            )} */}
      <div className={styles.filter_container}>
        <h2>Find contact by name</h2>
        <input
          type="text"
          value={filter}
          onChange={onFilterChange}
          placeholder="Enter filter value ..."
        />
      </div>
    </>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
