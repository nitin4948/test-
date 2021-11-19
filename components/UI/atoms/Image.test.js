import { render, screen } from '@testing-library/react';
import { Image } from './Image';

describe('Image component', () => {
  test('renders without error', () => {
    render(
        <Image 
            src={'https://www.gstatic.com/webp/gallery/2.webp'}
        />
    );
  });

  it('verify Image src', () => {
    const handler = jest.fn();
    const { container } = render(<Image 
        src={'https://www.gstatic.com/webp/gallery/2.webp'}
    />);
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("https://www.gstatic.com/webp/gallery/2.webp");
   });  
});

