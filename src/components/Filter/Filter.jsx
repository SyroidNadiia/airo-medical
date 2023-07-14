import React from 'react';
import { useBeerStore } from 'beerStore.js';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { statusFilters } from '../../constants';

export const Filter = () => {
  const selectedFilters = useBeerStore(state => state.selectedFilters);
  const setSelectedFilters = useBeerStore(state => state.setSelectedFilters);

  const handleFilterChange = event => {
    const selectedValue = event.target.value;
    setSelectedFilters(selectedValue);
  };

  return (
    <FormControl style={{ minWidth: 180 }}>
      <InputLabel>Filter</InputLabel>
      <Select value={selectedFilters} onChange={handleFilterChange}>
        <MenuItem value={statusFilters.all}>All</MenuItem>
        <MenuItem value={statusFilters.selected}>Selected</MenuItem>
        <MenuItem value={statusFilters.notSelected}>Not selected</MenuItem>
      </Select>
    </FormControl>
  );
};
