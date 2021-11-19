import { render, screen } from '@testing-library/react';
import { Home } from './index';

describe('Home page', () => {
  test('renders without error', () => {
    render(<Home />);
  });

  it('veify text render', () => {
    const handler = jest.fn();
    const { container } = render(<Home />);
    expect(container.firstChild).toHaveTextContent('Apply Filter')
   });  
});

/*
 const { container } = render(
  <Button loading loadingText="Submitting..." className="btn btn-primary">
   Log in
  </Button>
 );

 expect(container).not.toHaveTextContent('Log in');
 expect(container).toHaveTextContent('Submitting...');
 expect(container.firstChild).toHaveAttribute('disabled');

 */