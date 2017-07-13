import React from 'react';

import './App.css';

import FilterContainer from './containers/FilterContainer';
import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

function App() {
  return (
    <main>
      <HeaderContainer />
      <FilterContainer />
      <ListContainer />
      <FormContainer />
    </main>
  );
}

export default App;
