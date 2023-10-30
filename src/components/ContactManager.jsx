import { useState } from "react";
import { v4 } from "uuid";
import ContactListItem from "./ContactListItem";
import { INPUTS } from "./constants/INPUTS";

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const updateContactField = ({ target: { name, value } }) => {
    setContact((prevContact) => ({ ...prevContact, [name]: value, id: v4() }));
  };

  const handleContactDeletion = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const sumbitHandler = (event) => {
    event.preventDefault();
    setContacts((prevContacts) => [...prevContacts, contact]);
    setContact({ id: "", firstName: "", lastName: "", email: "", phone: "" });
  };

  return (
    <div>
      <form onSubmit={sumbitHandler} className="p-3 shadow-lg rounded-md">
        <div className="grid grid-cols-2 gap-y-3 gap-x-2">
          {INPUTS.map(({ type, placeholder, name }, index) => {
            return (
              <input
                key={index}
                type={type}
                placeholder={placeholder}
                className="px-2 py-1 border-2 border-gray-400 rounded-md outline-blue-600"
                name={name}
                value={contact[name]}
                onChange={updateContactField}
              />
            );
          })}
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-1 border-2 border-blue-700 bg-blue-700 text-white rounded-md">
          Add Contact
        </button>
      </form>
      <div className="shadow-lg rounded-md p-4 mt-3">
        <h3 className="text-xl font-bold text-blue-600 py-5 text-left">
          Contact List:
        </h3>
        <ul>
          {contacts.length ? (
            contacts.map((contact) => (
              <ContactListItem
                key={contact.id}
                info={contact}
                handleContactDeletion={() => handleContactDeletion(contact.id)}
              />
            ))
          ) : (
            <p className="py-7 rounded-md font-semibold text-xl">
              No Contact Yet!
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ContactManager;
