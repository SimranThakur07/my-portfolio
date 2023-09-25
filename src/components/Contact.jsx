const Contact = () => {
  return (
    <>
      <div className="container-fluid" id="contact">
        <div className="heading">
          <h3 className="text-center">Contact</h3>
        </div>
        <div className="contact">
          <div className="contact-form">
            <form action="">
            <div className="mb-3 form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                required
              />
              <label htmlFor="name" className="form__label">
                Name
              </label>
            </div>
            <div className="mb-3 form__group field">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                required
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <div className="mb-3 form__group field">
              <textarea
                className="form__field"
                rows="3"
                required
                placeholder="Message"
              ></textarea>
              <label htmlFor="message" className="form__label">
                Message
              </label>
            </div>
            <button>Submit</button>
            </form>
          </div>
          <div className="conatct-details">
            <div>
                <span>Simran</span>
                <p>Front-end Developer</p>
            </div>
            <div>
                <span>Phone</span>
                <p>+91 8051030096</p>
            </div>
            <div>
                <span>Email</span>
                <p>thakursimran1207@gmail.com</p>
            </div>
            <div>
                <span>Website</span>
                <p>wwwabc.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
