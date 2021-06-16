import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../../ui/notification";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [notification, setNotification] = useState(false);
  const [status, setStatus] = useState("");

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setNotification(true);
    setRequestStatus("Pending...");
    const response = await fetch(`${process.env.NEXT_PUBLIC_SEND_MESSAGE}`, {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (response.status === 200) {
      setRequestStatus(data.message);
      setStatus("success");
    } else if (response.status === 411) {
      setRequestStatus(data.error);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "error" || status === "success") {
      const timer = setTimeout(() => {
        setNotification(false);
        setRequestStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className={classes.contact}>
      <h1>How Can I help You?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.control}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              placeholder="Enter your text"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit" onSubmit={sendMessageHandler}>
              Send Message
            </button>
          </div>
        </div>
      </form>
      {notification && (
        <Notification
          title={"Email Status"}
          message={requestStatus}
          status={status}
        />
      )}
    </section>
  );
};

export default ContactForm;
