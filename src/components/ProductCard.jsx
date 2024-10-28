import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, deleteFromFavorite } from "../app/features/favoriteSlice";


const ProductCard = ({ product }) => {
    const favorite = useSelector((state) => state.favorite.favorite)
    const dispatch = useDispatch()
    const [liked, setLiked] = useState(favorite.some((item) => item.id == product.id))

    const handleFavorite = () => {
        const isFavorite = !liked;
        setLiked(isFavorite);
        if (isFavorite) {
            dispatch(addToFavorite(product))
        } else {
            dispatch(deleteFromFavorite(product))
        }
    }

    return (
        <div className="productCard">
            <div className="liked" onClick={handleFavorite}>
                {liked ? <FcLike /> : <FaRegHeart />}
            </div>
            <Link to={`/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} className="productImage" />
            </Link>
            <div className="productInfo">
                <h3 className="productTitle">{product.title}</h3>
                <span className="productPrice">{product.price}$</span>
                <span className="productId">ID: {product.id}</span>
                <p className="productDescription">{product.description}</p>
                <span className="productStock">{product.availabilityStatus}</span>
            </div>
        </div>
    );
};

export default ProductCard;
