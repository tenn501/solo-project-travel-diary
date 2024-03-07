import React from 'react';
import { useSelector } from 'react-redux';

// pull the state here welcomeHeader;

const HeaderContainer = () => {
  const welcomeHeader = useSelector((state) => state.state.welcomeHeader);
  return (
    <div class="headContainer" id="header">
      <h1 id='headerText'>{welcomeHeader}</h1>
    </div>
  );
};

export default HeaderContainer;