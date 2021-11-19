import { render, screen } from '@testing-library/react';
import { DetailsPageHeader } from './DetailsPageHeader';
import {
  BrowserRouter as Router,
} from "react-router-dom";

describe('DetailsPageHeader component', () => {
  test('renders without error', () => {
    render(
      <Router>
        <DetailsPageHeader 
            title={'test'}
        />
      </Router>  
    );
  });

  it('verify text prop is available', () => {
    const handler = jest.fn();
    const { container } = render(
      <Router>
        <DetailsPageHeader 
            title={'test'}
        />        
      </Router>);
    expect(container.firstChild).toHaveTextContent('test')
   });   
 
});

