import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text component', () => {
  test('renders without error', () => {
    render(
        <Text 
            child={'Test text'}
        />
    );
  });

  it('verify text render', () => {
    const handler = jest.fn();
    const { container } = render(<Text 
        child={'Test text'}
    />);
    expect(container.firstChild).toHaveTextContent('Test text')
   });  
});

