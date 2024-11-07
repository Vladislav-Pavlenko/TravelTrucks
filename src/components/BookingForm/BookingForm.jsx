import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomCalendar from "../CustomCalendar/CustomCalendar.jsx";
import styles from "./BookingForm.module.css";
import toast, { Toaster } from "react-hot-toast";

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.string().required("Booking date is required"),
  });

  const handleSubmit = (values, actions) => {
    toast.success("Booking request submitted successfully!");
    actions.resetForm();
    setSelectedDate(null);
  };

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: selectedDate || "",
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={styles.form}>
            <div>
              <Field
                className={styles.input}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <input
                className={styles.input}
                type="text"
                name="bookingDate"
                value={selectedDate || ""}
                onClick={toggleCalendar}
                readOnly
                placeholder="Booking date*"
                required
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.calendar}>
              {isCalendarOpen && (
                <CustomCalendar
                  onDateSelect={(date) => {
                    setSelectedDate(date);
                    setFieldValue("bookingDate", date);
                    setIsCalendarOpen(false);
                  }}
                />
              )}
            </div>

            <div>
              <Field
                as="textarea"
                className={styles.textarea}
                name="comment"
                placeholder="Comment"
              />
            </div>

            <button className={styles.submit_btn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </section>
  );
}
