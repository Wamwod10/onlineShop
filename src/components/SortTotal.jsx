import React, { useState } from 'react'
import Category from './Category'
import { useGetCategoryQuery } from '../app/api/dummyData'
import Loading from './Loading'

const SortTotal = ({ category, setCategory, setSort, sort, order, setOrder }) => {


    console.log(order, '1');
    console.log(sort, '1');
    // const [nameSort, setNameSort] = useState()
    const { data, isError, isLoading } = useGetCategoryQuery()

    if (isLoading) return <Loading />;
    if (isError) return <Error />;

    return (
        <div style={{ display: "flex" }}>
            <Category state={category} setState={setCategory} data={data} name="category" />

            <Category state={order} setState={setOrder} setSort={setSort} data={["asc", "desc"]} name="title" />
            <Category state={order} setState={setOrder} setSort={setSort} data={["asc", "desc"]} name="price" />
        </div>
    )
}

export default SortTotal