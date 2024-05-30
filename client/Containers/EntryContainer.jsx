import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';


// child component;
import EntryComponent from '../Components/entryComponent.jsx';


// pull the state here welcomeHeader;

const EntryContainer = () => {

  const newTitle = useSelector((state) => state.state.newTitle);
  const newDescription = useSelector((state) => state.state.newDescription);

  const dispatch = useDispatch();

  // dispatching actions;
  const updateTitle = (data) => {
    // console.log(newTitle);
    dispatch(actions.createTitle(data))
  };
  const updateDescription = (data) => {
    dispatch(actions.createDescription(data))
  };

  const clear = () => {
    dispatch(actions.clear())
  };

  const handleEventNewEntry = (event) => {
    // console.log(newTitle);
    // console.log(newDescription);
    const data = {
      title: newTitle,
      description: newDescription
    };
    const dataStr = JSON.stringify(data)
    // console.log(dataStr);
    // event.preventDefault();
    fetch("http://localhost:3000/post", {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: dataStr,
    })
    .then((data) => {
      // data.json();
      clear();
      // console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  };

  return (
    <div class="entryContainer">
      {/* <h2>Entry Container</h2> */}
      <EntryComponent
      updateTitle = {updateTitle}
      updateDescription = {updateDescription}
      newTitle = {newTitle}
      newDescription = {newDescription}
      handleEventNewEntry = {handleEventNewEntry}
      />
    </div> 
  );
};



export default EntryContainer;