import React from "react";

function ContactListItem({ info, handleContactDeletion }) {
  const { id, firstName, lastName, email, phone } = info;

  const deleteContact = () => {
    handleContactDeletion(id);
  };

  return (
    <li className="mt-2 flex justify-between items-center bg-gray-100 rounded-sm p-3">
      <p className="flex-1 text-start capitalize">{`${firstName} ${lastName}`}</p>
      <p className="flex-1 text-start">
        <span>📩</span> {email}
      </p>
      <p className="flex-1 text-start">
        <span>☎</span> {phone}
      </p>
      <button className="text-red-600 cursor-pointer" onClick={deleteContact}>
        🗑️ Delete
      </button>
    </li>
  );
}

export default ContactListItem;
