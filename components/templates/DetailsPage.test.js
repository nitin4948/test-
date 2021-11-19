import { render, screen } from '@testing-library/react';
import { DetailsPage } from './DetailsPage';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

describe('DetailsPage', () => {
  test('renders without error', () => {
    const obj = {
        author: "Ofelia Hilpert",
        description: "Duchess said after a minute or two, looking for eggs, as it is.' 'I quite agree with you,' said the King exclaimed, turning to the other, and making faces at him as he spoke. 'A cat may look at all.",
        genre: "Cupiditate",
        image: "http://placeimg.com/480/640/any",
        isbn: "9786546755833",
        published: "1981-03-14",
        publisher: "Et Et",
        title: "And with that she."
    };
    render(
      <Router>
        <DetailsPage {...obj}/>
      </Router>  
    );
  });
  
});


