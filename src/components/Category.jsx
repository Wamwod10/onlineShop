import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Category = ({ state, setState, data, name, setSort }) => {
    const handleChange = (event) => {
        setState(event.target.value);
        if (setSort) {
            setSort(name)
        }
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{name}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="Сategory"
                    onChange={handleChange}
                >
                    {
                        data?.map((item) => (
                            <MenuItem value={item} key={item}>{item}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default Category