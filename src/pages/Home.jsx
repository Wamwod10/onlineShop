import Product from "../components/Product"
import { BiLogoShopify } from "react-icons/bi";
import "../sass/home.scss"
import { useState } from "react";
import Pagination from "../components/Pagination";
import Category from "../components/Category";
import SortTotal from "../components/SortTotal";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState('');
    const [sort, setSort] = useState();
    const [order, setOrder] = useState();

    return (
        <div>
            <div className="home">
                <div className="container">
                    <div className="home__box">
                        <a href="" className="home__logo"><BiLogoShopify /></a>
                    </div>
                </div>
            </div>
            <SortTotal category={category} setCategory={setCategory} sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
            <Product currentPage={currentPage} category={category} sort={sort} order={order} />
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Home