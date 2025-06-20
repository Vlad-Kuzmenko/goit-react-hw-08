import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.username,
        number: values.phone,
      })
    );
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.string().min(7).max(7).required("Required"),
  });

  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

  return (
    <Formik
      initialValues={{ username: "", phone: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={s.field}
            type="text"
            name="username"
            id={nameFieldId}
          ></Field>
          <ErrorMessage className={s.error} name="username" component="span" />
        </div>

        <div>
          <label className={s.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={s.field}
            type="text"
            name="phone"
            id={phoneFieldId}
          ></Field>
          <ErrorMessage className={s.error} name="phone" component="span" />
        </div>

        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
