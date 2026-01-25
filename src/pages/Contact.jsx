import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    service_type: "General Inquiry",
    subscribe: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Template params matching EmailJS template variables
    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      service_type: formData.service_type,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_u7w8nno",      // Service ID
        "template_7h53a3b",     // Template ID
        templateParams,
        "thPXRly5ZzoTLndUi"     // Public Key
      );

      toast.success("Message sent successfully!");
      setFormData({
        from_name: "",
        from_email: "",
        service_type: "General Inquiry",
        subscribe: false,
        message: "",
      });
    } catch (err) {
      toast.error("Failed to send message. Try again later.");
      console.error(err);
    }
  };

  return (
    <motion.section
      className="contact container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>
      <p>Have a question, request, or want to connect? Fill out the form below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />
        <select name="service_type" value={formData.service_type} onChange={handleChange}>
          <option>General Inquiry</option>
          <option>Internship Request</option>
          <option>Collaboration</option>
          <option>Other</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to updates
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary"
        >
          Send Message
        </motion.button>
      </form>

      <ToastContainer position="top-right" autoClose={5000} />
    </motion.section>
  );
}
