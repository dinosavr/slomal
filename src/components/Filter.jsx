import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import PropTypes from 'prop-types';

function Filter() {
  const selectValueDef = 20;
  const [typesSort] = useState([
    { id: 1, name: 'ID', value: 10 },
    { id: 2, name: 'Name2', value: 20 },
    { id: 3, name: 'Desc', value: 30 },
  ]);
  const [typeSort, setTypeSort] = useState(selectValueDef);

  const handleChange = (event) => {
    setTypeSort(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={typeSort}
        label="Sort"
        onChange={handleChange}
      >
        {typesSort.map((type) => <MenuItem value={type.value} key={type.id}>{type.name}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

// Filter.propTypes = {};

export default Filter;
