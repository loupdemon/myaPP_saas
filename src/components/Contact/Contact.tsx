// components/EmailModal.js
/*
import React, { useState } from "react";
import emailjs from "emailjs-com"; // Make sure to install EmailJS using npm or yarn
const EmailModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Envoi de l'email avec EmailJS
        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                e.target,
                "YOUR_USER_ID"
            )
            .then((result) => {
                console.log(result.text);
                alert("Message envoyé avec succès !");
                setFormData({ name: "", email: "", subject: "", message: "" });
                onClose(); // Fermer le modal après l'envoi de l'email
            })
            .catch((error) => {
                console.error(error.text);
                alert("Échec de l'envoi du message. Veuillez réessayer.");
            });
    };

    if (!isOpen) return null; // Si le modal n'est pas ouvert, ne rien rendre

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Contactez-nous</h2>
                <form onSubmit={handleSubmit} className="email-form">
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject">Sujet</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
                <button onClick={onClose} className="close-btn">
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default EmailModal;
*/
