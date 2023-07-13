import React from 'react';
import { useBeerStore } from 'beerStore.js';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';


export const Filter = () => {
  const selectedFilters = useBeerStore(state => state.selectedFilters);
  const setSelectedFilters = useBeerStore(state => state.setSelectedFilters);
  const fetchBeerRecipes = useBeerStore(state => state.fetchBeerRecipes);

  const handleFilterChange = event => {
    const selectedValue = event.target.value;
    setSelectedFilters(selectedValue);
  };

  return (
    <FormControl style={{ minWidth: 180 }}>
      <InputLabel>Filter</InputLabel>
      <Select
        multiple
        value={selectedFilters}
        onChange={handleFilterChange}
        renderValue={selected => selected.join(', ')}
      >
        <MenuItem value={fetchBeerRecipes}>All</MenuItem>
        <MenuItem value={selectedFilters}>Selected</MenuItem>
        <MenuItem value={!selectedFilters}>Not selected</MenuItem>
      </Select>
    </FormControl>
  );
};
