import React from 'react';
import HeaderContainer from './Containers/HeaderContainer.jsx';
import EntryContainer from './Containers/EntryContainer.jsx';
import MemoryContainer from './Containers/MemoryContainer.jsx';

import './stylesheets/style.scss';

// has all state;

const App = () => {
  // console.log(props);
  return (
    <div>
      {/* <h1>Hello, I rendered</h1> */}
      <HeaderContainer/>
      <EntryContainer/>
      <MemoryContainer/>
    </div>
  )
};


export default App;