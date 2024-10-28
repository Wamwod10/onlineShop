import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../app/api/dummyData";
import Loading from "../components/Loading";
import Error from "../components/Error";

const SingleProduct = () => {
    const { id } = useParams();
    const { data: product, isError, isLoading } = useGetSingleProductQuery({ id });

    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    return (
        <div className="singleProductContainer">
            <div className="productImage">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="productDetails">
                <h1 className="productTitle">{product.title}</h1>
                <p className="productDescription">{product.description}</p>
                <span className="productPrice">{product.price}$</span>
                <span className="productStock">{product.availabilityStatus}</span>
                <div className="productInfo">
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>SKU:</strong> {product.sku}</p>
                    <p><strong>Rating:</strong> {product.rating}</p>
                    <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                    <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
                </div>
                <button className="addToCartButton">Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleProduct;
