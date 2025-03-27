import styles from './Form.module.scss'
import { useState, useRef } from 'react'
import { motion } from 'motion/react'
import { SHADOWS } from '../../../constants/animation'
import Button from '../../UI/Button/Button'

function Form() {

    const [result, setResult] = useState("")
    const formRef = useRef(null)

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult("Envoi en cours...")
        const formData = new FormData(event.target)

        formData.append("access_key", "8720cd99-0cd0-464f-9be5-a47812466e4f")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })

        const data = await response.json()

        if (data.success) {
            setResult("Le message a été envoyé avec succès!")
            event.target.reset()
        } else {
            console.log("Error", data)
            setResult(data.message)
        }
    }

    const handleSubmitClick = () => {
        if (formRef.current) {
            formRef.current.requestSubmit()
        }
    }

    return (
        <motion.form ref={formRef} onSubmit={onSubmit} className={styles.form}
            initial={{ boxShadow: "none" }}
            animate={{ boxShadow: SHADOWS.OUTSET }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <label htmlFor="name-field">Nom</label>
            <input type="text" id="name-field" name="name" autoComplete='name' required />
            <label htmlFor="email-field">Email</label>
            <input type="email" id="email-field" name="email" autoComplete='email' required />
            <label htmlFor="message-field">Message</label>
            <textarea id="message-field" name="message" autoComplete='off' required></textarea>
            <Button text="Envoyer le message" onClick={handleSubmitClick} />
            <span>{result}</span>
        </motion.form>
    )
}

export default Form

