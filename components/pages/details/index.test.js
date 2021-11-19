import { render, screen } from '@testing-library/react';
import { Details } from './index';

describe('Details page', () => {
  test('renders without error', () => {
    render(<Details />);
  });

  it('veify class container class name', () => {
    const handler = jest.fn();
    const { container } = render(<Details />);
    expect(container.firstChild).toHaveClass('detail-page');
   });  
});
