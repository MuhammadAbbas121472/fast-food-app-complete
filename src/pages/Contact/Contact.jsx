import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you! Feel free to contact us anytime.
        </p>

        <div className="contact-info">
          <p><strong>📍 Address:</strong> Karachi, Pakistan</p>
          <p><strong>📞 Phone:</strong> +92 300 1234567</p>
          <p><strong>📧 Email:</strong> support@fastfoodapp.com</p>
        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;