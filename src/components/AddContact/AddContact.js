import React, { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [photo, setPhoto] = useState("");

  function handleClick() {
    let newContact = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div className="d-flex justify-content-center m-5 fs-5">
      <input
        className="m-3 "
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        className="m-3"
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="LastName"
        value={lastName}
      />
      <input
        className="m-3 "
        onChange={(e) => setPhoto(e.target.value)}
        type="url"
        placeholder="URL Photo"
        value={photo}
      />
      <button onClick={handleClick}>Add contact</button>
    </div>
  );
};

export default AddContact;
