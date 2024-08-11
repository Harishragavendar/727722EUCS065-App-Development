import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="all10">
                <div className="details10">
                    <h1 className="head10">CONTACT US</h1>
                    <p className="desc10">
                        "We create interactive storybooks and educational platforms that blend captivating stories with engaging multimedia elements. 
                        <br></br>Our apps use animations, sounds, and interactive games to make learning enjoyable and effective. 
                        <br></br>Designed to support literacy and critical thinking, they offer a dynamic alternative to traditional education methods."
                    </p>
                    <div className="contact-item10">
                       <h2 className="head10"><i className="fas fa-map-marker-alt"></i> Address</h2>
                       <p className="desc10">1234 Main Street, Anytown, USA</p>
                    </div>
                    <div className="contact-item10">
                       <h2 className="head10"><i className="fas fa-phone"></i> Phone</h2>
                       <p className="desc10">(123) 456-7890</p>
                    </div>
                    <div className="contact-item10">
                       <h2 className="head10"><i className="fas fa-envelope"></i> Email</h2>
                       <p className="desc10">info@example.com</p>
                    </div>
                    <h1 className='head10'>Connect With Us</h1>
                    <form className="contact-form10">
                        <div className="form-item10">
                            <label htmlFor="fname" className="form-label10">First Name</label>
                            <input type="text" id="fname" name="fname" className="form-input10" required />
                        </div>
                        <div className="form-item10">
                            <label htmlFor="lname" className="form-label10">Last Name</label>
                            <input type="text" id="lname" name="lname" className="form-input10" required />
                        </div>
                        <div className="form-item10">
                            <label htmlFor="email" className="form-label10">Email</label>
                            <input type="email" id="email" name="email" className="form-input10" required />
                        </div>
                        <div className="form-item10">
                            <label htmlFor="message" className="form-label10">What can we help you with?</label>
                            <textarea id="message" name="message" className="form-input10" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="submit-button10">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
