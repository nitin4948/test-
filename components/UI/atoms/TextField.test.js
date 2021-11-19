import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';
import userEvent from '@testing-library/user-event';

describe('TextField component', () => {
  const fieldRef = null;
  test('renders without error', () => {
    render(
        <TextField 
            fieldRef={fieldRef}
        />
    );
  });

  it('verify text field onchange', () => {
    render(<TextField 
        fieldRef={fieldRef}
        data-testid="email-input"
    />);

    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@mail.com");
 
    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
   });

});

