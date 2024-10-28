import { Link } from "react-router-dom"

const nav = () => {
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to="basket">Basket</Link>
                </li>
                <li>
                    <Link to="favorite">Favorite</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default nav