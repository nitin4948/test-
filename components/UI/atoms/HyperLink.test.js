import { render, screen } from '@testing-library/react';
import { HyperLink } from './Hyperlink';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

describe('Hyperlink component', () => {
  test('renders without error', () => {
    render(
    <Router>    
        <HyperLink 
            child={'Hyper link'}
            to={"/link"}
        />
    </Router>    
    );
  });

  it('verify Hyperlink text render', () => {
    const handler = jest.fn();
    const { container } = render(
    <Router>    
        <HyperLink 
            child={'Hyper link'}
            to={"/link"}
        />
    </Router>    
    );
    expect(container.firstChild).toHaveTextContent('Hyper link')
   });  
});

