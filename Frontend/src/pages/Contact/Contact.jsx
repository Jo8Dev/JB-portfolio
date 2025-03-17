import { useState } from "react";
import styles from './Contact.module.scss'
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Envoi en cours...");
        const formData = new FormData(event.target);

        formData.append("access_key", "8720cd99-0cd0-464f-9be5-a47812466e4f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Le message a été envoyé avec succès!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className={styles.contact}>
            <SectionTitle className={styles.contact__title}>
                Contact
            </SectionTitle>
            <form onSubmit={onSubmit} className={styles.contact__form}>
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
                <label htmlFor="message">Message</label>
                <textarea name="message" required></textarea>
                <button type="submit" className={styles.contact__button}>Envoyer le message</button>

            </form>
            <span>{result}</span>


        </section>
    );
}


export default Contact