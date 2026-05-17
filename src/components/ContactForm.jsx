import "../styles/form.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h2>Request a Quote</h2>

      <form>
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Email Address" required />

        <input type="tel" placeholder="Phone Number" required />

        <input type="file" />

        <textarea rows="5" placeholder="Comments"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
