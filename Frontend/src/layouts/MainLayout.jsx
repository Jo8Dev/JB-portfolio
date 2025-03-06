import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"
import PropTypes from "prop-types"

function MainLayout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main >{children}</main>
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout
