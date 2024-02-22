import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Home from '../../Screens/Home/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <MemoryRouter> 
        <Home />
      </MemoryRouter>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cardComponent = getByTestId('card-component');
    expect(cardComponent).toBeInTheDocument();
  });
});
