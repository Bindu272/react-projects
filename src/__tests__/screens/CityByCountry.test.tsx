import React from "react";
import { render } from "@testing-library/react";
import CityByCountry from "../../Screens/CityByCountry/CityByCountry";

describe('City by country component',()=>{
    it('renders without crashing',()=>{
        render(<CityByCountry/>)
    })
})