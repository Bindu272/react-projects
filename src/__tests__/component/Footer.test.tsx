import React from 'react'
import {render} from '@testing-library/react'
import ColorInversionFooter from '../../component/Footer/Footer'
import { MemoryRouter } from 'react-router-dom'
describe('Footer  component',()=>{
    it('renders without crashing',()=>{
        render(<MemoryRouter> 
            < ColorInversionFooter/>
            </MemoryRouter>)
    })
})
