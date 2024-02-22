import React from 'react'

import {render} from '@testing-library/react'
import BioCard from '../../component/Card/Card'
import { MemoryRouter } from 'react-router-dom'
describe('Card component',()=>{
    it('renders without crashing',()=>{
        render(
        <MemoryRouter>
             <BioCard/>
        </MemoryRouter>
       )
    })
})
