import React from 'react'
import { useGetProductsQuery } from '../app/api/dummyData'
import ProductCard from './ProductCard';
import Error from './Error';
import Loading from './Loading';

const Product = ({ currentPage, category, sort, order }) => {
    const { data, isError, isLoading } = useGetProductsQuery({ currentPage, category, sort, order })

    if (isError) return <Error />
    if (isLoading) return <Loading />
    return (
        <div className='productHolder'>
            {data.products.map((item) => (
                <ProductCard product={item} key={item.id} />
            ))}
        </div>

    )
}

export default Product