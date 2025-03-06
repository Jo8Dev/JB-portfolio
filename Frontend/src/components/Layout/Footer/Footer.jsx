import styles from './Footer.module.scss'
import logo from '../../../assets/icons/Logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div >Footer </div>
            <Link to="/"><img src={logo} alt="logo JB" /></Link>
        </footer>

    )
}

export default Footer