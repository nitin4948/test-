import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('Home page', () => {
  test('renders without error', () => {
    const searchField = null;
    render(
        <HomePage
            fieldRef={searchField}
            applyFilterClick={()=>{}}
            applyFilterValue={'Apply Filter'}
            clearFilterClick={()=>{}}
            clearFilterValue={'Remove Filter'}
            paginationResult={{}}
            selectedPagination={1}
            recorPerPage={10}
            setSelectedPagination={()=>{}}
        />
    );
  });
  
});


