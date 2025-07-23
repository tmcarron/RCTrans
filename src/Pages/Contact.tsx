import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <section className="scrollable-section">
        <p>
          <ul>
            <li>
              email:{" "}
              <a href="mailto:rctransandgearinc@gmail.com">
                rctransandgearinc@gmail.com
              </a>
            </li>
            <li>
              phone: <a href="tel:+12482885575">248.288.5575</a>
            </li>
          </ul>
        </p>
        <p>We're open 7:00am to 4:30pm</p>
        <h2>We're located at 4817 Fernlee Ave. Royal Oak, MI</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.03249629319!2d-83.18084488847879!3d42.53336442401506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c66f9d7b416d%3A0x590ec2150897d17e!2s4817%20Fernlee%20Ave%2C%20Royal%20Oak%2C%20MI%2048073!5e0!3m2!1sen!2sus!4v1753244658793!5m2!1sen!2sus"
          width="450"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
