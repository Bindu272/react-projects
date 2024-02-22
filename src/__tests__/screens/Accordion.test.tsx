import React from 'react'
import AccordionNoDivider from '../../Screens/Accordion/Accordion'
import {render} from '@testing-library/react'
describe('Accordion component',()=>{
    it('renders without crashing',()=>{
        render(<AccordionNoDivider/>)
    })
})
