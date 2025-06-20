import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={s.container} key={id}>
      <div className={s.wrapper}>
        <h2 className={s.name}>
          <FaUser />
          {name}
        </h2>
        <p className={s.phone}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={s.delete} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
