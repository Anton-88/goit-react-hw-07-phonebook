import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from "../../redux/phonebook/mockApi";

function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  const onSubmit = (newContact) => {
    console.log(`newContact`, newContact);
    if (contacts.map((contact) => contact.name).includes(newContact.name)) {
      alert(`${newContact.name} is in your contacts list already`);
    } else {
      createContact(newContact);
      reset();
    }
  };

  return (
    <>
      <h1>PhoneBook</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contact_form_container}>
          <div className={styles.contact_form_item}>
            <label className={styles.contact_form_label}>Contact name:</label>
            <input
              type="text"
              {...register("name", {
                pattern:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              })}
              name="name"
              placeholder="Enter contact name ..."
              title="User name must contain only letters, spaces, apostrophe, dash or the underscore character. For ex, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc...."
              required
            />
            {errors.name && <p>Name is required.</p>}
          </div>
          <div className={styles.contact_form_item}>
            <label className={styles.contact_form_label}>Contact number:</label>
            <input
              type="tel"
              name="phone"
              {...register("phone", {
                pattern:
                  "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
              })}
              placeholder="Enter contact number ..."
              title="Phone number must contain only digits and may have spaces, dash, round brackets and start with plus(+)"
              required
            />
            {errors.phone && <p>Phone number is required.</p>}
          </div>
          <button type="submit" className={styles.contact_add_btn}>
            Add contact
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
