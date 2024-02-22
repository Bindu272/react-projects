import React from "react";
import { render } from "@testing-library/react";

import ThemeSwitch from "../../Screens/ThemeSwitch/ThemeSwitch";

describe('Theme Switch component',()=>{
it('renders without crash',()=>{
    render(<ThemeSwitch/>)
})
})