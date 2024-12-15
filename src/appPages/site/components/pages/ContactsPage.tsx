import React from "react";
import Contacts from "./contacts/Contacts";
import scss from "./ContactsPage.module.scss";
const ContactsPage = () => {
  return (
    <>
      <div className={scss.content}>
        <Contacts />
      </div>
    </>
  );
};

export default ContactsPage;
