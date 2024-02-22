import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../../Layout/Layout';


describe('Layout component', () => {
  it('renders children inside the app-body div', () => {

    const { getByTestId } = render(
      <Layout>
        <div data-testid="test-child">Test Child</div>
      </Layout>
    );


    // eslint-disable-next-line testing-library/prefer-screen-queries
    const appBodyElement = getByTestId('app-body');
    expect(appBodyElement).toBeInTheDocument();


    // eslint-disable-next-line testing-library/prefer-screen-queries
    const testChildElement = getByTestId('test-child');
    expect(testChildElement).toBeInTheDocument();
    expect(appBodyElement).toContainElement(testChildElement);
  });
});
