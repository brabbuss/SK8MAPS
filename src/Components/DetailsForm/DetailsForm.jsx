import React, {useState, useContext} from "react";
import "./DetailsForm.css";
import AppContext from '../App/AppContext'

const DetailsForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, dispatch] = useContext(AppContext);

  const submitIdea = event => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      description,
    };
    dispatch({ type: "ADD_IDEA", idea: newIdea });
    clearInputs();
  };

  const clearInputs = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <button onClick={submitIdea}>SUBMIT</button>
    </form>
  );
};

export default DetailsForm;


// begin with
/*
id
location
all props set to null
*/

// collect
/*
interpolate user name (stretch) to add to 'skated by: NAME'
add user score
add user difficulty

title - string (min chars)
description - string (min chars)
features:
  click yes/no
    condition - out of 5
    description
    photo link
Safety:
  security
  public
  hazards
Images
  by URL
*/
// onSubmit
/*
add the completed newSpot to user's contributions
add the completed newSpot to all spots
set the completed newSpot as the selectedSpot
  navigate to details page for newSpot
push into array of spots
set newSpot to null
*/