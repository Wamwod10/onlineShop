import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard";

const Favorite = () => {
    const favorite = useSelector((state) => state.favorite.favorite)

    return (
        <div className='productHolder'>
            {favorite.map((item) => (
                <ProductCard product={item} key={item.id} />
            ))}
        </div>
    )
}

export default Favorite