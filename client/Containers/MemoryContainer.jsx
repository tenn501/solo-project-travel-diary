import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';


// inport child component;
import MemoryComponent from '../Components/MemoryComponent.jsx';


const MemoryContainer = () => {


  return (
    <div class="memoryContainer">
      <MemoryComponent/>
    </div> 
  );

};


export default MemoryContainer;