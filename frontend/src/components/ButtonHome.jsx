import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";

const ButtonHome = () => {

    return (
        <Link to={'/'}>
            <Button variant="light">Back to Home</Button>{" "}
        </Link>
    )
}

export default ButtonHome;