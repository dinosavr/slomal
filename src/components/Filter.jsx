import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { categoryWords } from '../data/words';

function Filter({ filter }) {
  // const selectValueDef = 20;
  const [typesSort] = useState(categoryWords);
  const [typeSort, setTypeSort] = useState('');

  const handleChange = (event) => {
    setTypeSort(event.target.value);
    filter(event.target.value);
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

Filter.propTypes = {
  filter: PropTypes.func,
};

Filter.defaultProps = {
  filter: null,
};

export default Filter;
