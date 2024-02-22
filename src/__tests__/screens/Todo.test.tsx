import React from "react";
import { render } from "@testing-library/react";
import Todo from "../../Screens/Todo/Todo";

describe('Todo component',()=>{
it('renders without crash',()=>{
    render(<Todo/>)
})
})