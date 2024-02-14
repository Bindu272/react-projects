import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const countries = [
    { name: "India", state: ["Andhra Pradesh", " Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", " Karnataka", "  Nagaland"] },
    {
        name: "United States",
        state: [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
        ]
    },
    {
        name: "Canada",
        state: [
            "Alberta",
            "British Columbia",
            "Manitoba",
            "New Brunswick",
            "Newfoundland and Labrador",
            "Nova Scotia",
            "Ontario",
            "Prince Edward Island",
            "Quebec",
            "Saskatchewan",
            "Northwest Territories",
            "Nunavut",
            "Yukon"
        ]
    }, {
        name: "United Kingdom",
        state: [
            "England",
            "Scotland",
            "Wales",
            "Northern Ireland"
        ]
    }

];
const CityByCountry = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('')
    const handleSelectedCountry = (e: SelectChangeEvent) => {
        const country = e.target.value
        setSelectedCountry(country)
    }
    const handleSelectedState = (e: SelectChangeEvent) => {
        const state = e.target.value;
        setSelectedState(state)
    }
    return (<div style={{ display: 'flex', flexDirection: 'column' }}>

        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }} >
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCountry}
                    label="Country"
                    onChange={handleSelectedCountry}
                >
                    {countries.map((country) => (
                        <MenuItem value={country.name}>{country.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200 }} >
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedState}
                    label="State"
                    onChange={handleSelectedState}
                >
                    {selectedCountry &&
                        countries
                            .find((country) => country.name === selectedCountry)
                            ?.state.map((state, index) => <MenuItem value={state}>{state}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
        <div>
            <Stack direction="row" spacing={20}>
                {selectedCountry ? (<Chip label={selectedCountry} color="primary" />) : (<Chip label='Select Country' color="primary" />)}

                {selectedState ? (<Chip label={selectedState} color="success" />) : (<Chip label='Select state' color="success" />)}
            </Stack>
        </div>

    </div>
    )
}

export default CityByCountry
