import './contact_us.styles.scss';


const ContactUs = () => {
    return (
        <div className="contact-us-total-container">
            


            <div className="contact-us-container">
                <h2>Contact Us</h2>
                <p>If you have any questions or feedback, feel free to reach out to us!</p>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>

                
            </div>
           

            
        </div>
    );
}

export default ContactUs;