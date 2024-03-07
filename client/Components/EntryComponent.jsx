import React from 'react';
import { useSelector } from 'react-redux';


const EntryComponent  = ({ updateTitle, updateDescription, newTitle, newDescription, handleEventNewEntry }) => {

  return (
    <div id="entry_component">
      <h2>Create a Memory</h2>
      {/* <form action="http://localhost:3000/post" method="post"> */}
        <div class="placeholders">
          <div>
          <label>Title: </label>
          <textarea 
            id="title_input"
            type="text" 
            value={newTitle}
            onChange={(e) => updateTitle(e.target.value)}
            // name="title"
          />
          </div>
          <div>
          <label>Description: </label>
          <textarea 
            id="description_input"
            type="text" 
            rows={5}
            value={newDescription}
            onChange={(e) => updateDescription(e.target.value)}
            // name="description" 
          />
          </div>
        </div>
        <div class="button">
          <button onClick={() => handleEventNewEntry()}>
            Create
          </button>
          {/* <input type="submit" value="Create"/> */}
        </div>
      {/* </form> */}
      {/* <hr></hr> */}
    </div>
  )

};

export default EntryComponent;