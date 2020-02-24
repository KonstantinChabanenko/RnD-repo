import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchField = () => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const makeSearch = (e) => {
    e.preventDefault();
    if (searchValue) {
      history.push({
        pathname: '/search',
        search: `?q=${searchValue}`,
      });
    }
  }

  return (
    <Form inline onSubmit={makeSearch}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button variant="outline-light" type="submit">Search</Button>
    </Form>
  )
}

export default SearchField;
