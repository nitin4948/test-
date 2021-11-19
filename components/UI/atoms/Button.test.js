import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';
import { AllDetails } from "../molecules/AllDetails";
import {
  BrowserRouter as Router,
} from "react-router-dom";

describe('Button component', () => {
  test('renders without error', () => {
    render(
        <Button 
            value={'Continue button'}
            clickEvent={()=>{}}
        />
    );
  });

  test('verify button text render', () => {
    const handler = jest.fn();
    const { container } = render(<Button 
        value={'Continue button'}
        clickEvent={()=>{}}
    />);
    expect(container.firstChild).toHaveTextContent('Continue button')
   });
   
  test('clicking the button', () => {
    render(
      <Router>
        <AllDetails 
          {...{author: "Kenna Hagfg",
          description: "Hatter. 'Does YOUR watch tell you my adventures--beginning from this side of fgthe Queen said to herself. At this moment the King, 'or I'll have you executed, whether you're a little ledge of rock.",
          genre: "Voluptates",
          image: "http://placeimg.com/480/640/any",
          isbn: "9780991265077",
          published: "1991-09-09",
          publisher: "Vero Fugafgh",
          title: "She h"}}
        />
    </Router>
  );
    const button = screen.getByTestId("test-button");
    fireEvent.click(button);
    expect(screen.getByTestId("test-button")).toHaveValue("Cancel");
  })
});


