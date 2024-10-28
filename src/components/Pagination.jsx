import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Loading from './Loading';
import { useGetProductsQuery } from '../app/api/dummyData';

export default function PaginationRounded({ currentPage, setCurrentPage }) {
    const { data, isError, isLoading } = useGetProductsQuery({ currentPage })
    let total = Math.floor(data?.total / 15)

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    return (
        <Stack spacing={2} position={'fixed'} bottom={0}>
            <Pagination count={total} shape="rounded" onChange={handlePageChange} page={currentPage} />
        </Stack>
    );
}