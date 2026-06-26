import React, { useState } from 'react'
import {
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import '../css/filterSection.css'
import { applyFilters } from '../api/filterApi';

const filterSection = ({ filter, setResponseData }) => {
  const [list, setList] = useState(["instruments", "strikes", "expiry", "symbol"]);
  const [selectedFilters, setSelectedFilters] = useState({
    instruments: "",
    strikes: "",
    expiry: "",
    symbol: "",
  });

  const handleApply = async () => {
    const payload = {
      instruments: selectedFilters.instruments || null,
      strikes: selectedFilters.strikes === "" ? null : Number(selectedFilters.strikes),
      expiry: selectedFilters.expiry || null,
      symbol: selectedFilters.symbol || null,
    };

    console.log(payload);

    const filterData = await applyFilters(payload);
    setResponseData(filterData);
  };

  return (
    <div id='filter-container'>
      <div id='filter-text'> Filters</div>
      <div className="select-container">
        {[1, 2, 3, 4].map((item) => (
          <FormControl key={item} fullWidth>
            <Select
              displayEmpty
              value={selectedFilters[list[item - 1]]}
              onChange={(e) =>
                setSelectedFilters({
                  ...selectedFilters,
                  [list[item - 1]]: e.target.value,
                })
              }
              sx={{
                bgcolor: "#0f172a",
                color: "#d1d5db",
                borderRadius: "8px",

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#334155",
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#475569",
                },

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#3b82f6",
                },

                "& .MuiSvgIcon-root": {
                  color: "#fff",
                },
              }}
            >
              <MenuItem value="">
                {list[item - 1]}
              </MenuItem>

              {filter?.[list[item - 1]]?.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </div>

      <div className="buttonBox">
        <button className='reset-button' >Reset</button>
        <button className='apply-button' onClick={handleApply}>Apply Filters</button>
      </div>
    </div>
  )
}

export default filterSection    