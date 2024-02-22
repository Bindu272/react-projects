import React from 'react'

import {render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ResponsiveAppBar from '../../component/Header/Header'
describe('Header component',()=>{
    it('renders without crashing',()=>{
        render(
        <MemoryRouter>
             <ResponsiveAppBar/>
        </MemoryRouter>
       )
    })
})
