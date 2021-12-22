
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, toggleForm, show}) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && (<Button text={show ? "Close" : "Add"} color={show ? "red" : "green"} click={toggleForm} />)}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header