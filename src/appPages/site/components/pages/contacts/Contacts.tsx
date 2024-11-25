import Feedback from "../about_me/feedback/Feedback";
import scss from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={scss.contacts}>
      <div className="container">
        <div className={scss.content}>
          <Feedback/>
        </div>
      </div>
    </div>
  );
};

export default Contacts;