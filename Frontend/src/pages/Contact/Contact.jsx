import styles from './Contact.module.scss'
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle"
import Form from "../../components/Sections/Form/Form"
import SectionShadowInset from "../../components/UI/SectionShadowInset/SectionShadowInset"

function Contact() {

    return (
        <SectionShadowInset className={styles.contact}>
            <SectionTitle className={styles.contact__title}>
                Contact
            </SectionTitle>
            <Form />
        </SectionShadowInset>
    );
}


export default Contact