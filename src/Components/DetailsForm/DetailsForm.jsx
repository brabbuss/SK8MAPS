import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./DetailsForm.css";
import AppContext from "../App/AppContext";

const DetailsForm = () => {
  const [state, dispatch] = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [images, setImages] = useState("");
  const [curbs, setCurbs] = useState("");
  const [flats, setFlats] = useState("");
  const [rails, setRails] = useState("");
  const [stairs, setStairs] = useState("");
  const [security, setSecurity] = useState("");
  const [hazards, setHazards] = useState("");
  const [publicSkating, setPublicSkating] = useState("");

  const { newSk8Map } = state;

  const newSk8MapObject = {
    id: newSk8Map.id,
    difficulty: difficulty,
    title: title,
    description: description,
    location: newSk8Map.location,
    features: [
      {
        type: "Curbs",
        has: curbs ? true : false,
        condition: 5,
        description: curbs,
      },
      {
        type: "Flats",
        has: flats ? true : false,
        condition: 3,
        description: flats,
      },
      {
        type: "Rails",
        has: rails ? true : false,
        condition: 3,
        description: rails,
      },
      {
        type: "Stairs",
        has: stairs ? true : false,
        condition: 5,
        description: stairs,
      },
    ],
    safety: {
      security: {
        has: true,
        cheese_level: 1,
        description: "guards were chill",
      },
      hazards: "some big cracks",
      public: false,
    },
    images: [images],
  };


  const submitNewSk8Map = e => {
    dispatch({ type: "SAVE_NEW_SK8MAP", newSk8Map: newSk8MapObject });
    clearInputs();
  };

  const clearInputs = () => {
    setTitle("");
    setDescription("");
    setDifficulty("");
    setImages("");
    setCurbs("");
    setFlats("");
    setRails("");
    setStairs("");
    setSecurity("");
    setHazards("");
    setPublicSkating("");
  };

  return (
    <section className="form">
      <div className="detail-view">
        <div className="detail-title-container form-left">
          <div className="input-label">
            <h1>title</h1>
            <input
              type="text"
              placeholder="What's this place called?"
              name="title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div className="input-label">
            <h3>description</h3>
            <input
              type="text"
              placeholder="Enter a short description"
              name="description"
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </div>
          <div className="input-label">
            <h3>image link</h3>
            <input
              type="text"
              placeholder="URL for an image"
              name="image"
              value={images}
              onChange={event => setImages(event.target.value)}
            />
          </div>
          <div>
            {newSk8Map?.images && (
              <img
                alt={newSk8Map.images[0]?.description && "skating a curb"}
                src={newSk8Map.images[0]}
              />
            )}
          </div>
        </div>
        <div className="info-wrapper form-right">
          <div className="features-section">
            <article className="feature-details feature-input-wrapper">
              <div className="feature-type">
                <h3>Curbs</h3>
                <div className="form-yes-no">
                  <div>✅</div>
                  <div>❌</div>
                </div>
              </div>
              <div className="feature-input">
                <input
                  type="text"
                  placeholder="Description (waxed, chunky, new...)"
                  name="curbs"
                  value={curbs}
                  onChange={event => setCurbs(event.target.value)}
                />
              </div>
            </article>
            <article className="feature-details feature-input-wrapper">
              <div className="feature-type">
                <h3>Flats</h3>
                <div className="form-yes-no">
                  <div>✅</div>
                  <div>❌</div>
                </div>
              </div>
              <div className="feature-input">
                <input
                  type="text"
                  placeholder="Description (waxed, chunky, new...)"
                  name="flats"
                  value={flats}
                  onChange={event => setFlats(event.target.value)}
                />
              </div>
            </article>
            <article className="feature-details feature-input-wrapper">
              <div className="feature-type">
                <h3>Rails</h3>
                <div className="form-yes-no">
                  <div>✅</div>
                  <div>❌</div>
                </div>
              </div>
              <div className="feature-input">
                <input
                  type="text"
                  placeholder="Description (waxed, chunky, new...)"
                  name="rails"
                  value={rails}
                  onChange={event => setRails(event.target.value)}
                />
              </div>
            </article>
            <article className="feature-details feature-input-wrapper">
              <div className="feature-type">
                <h3>Stairs</h3>
                <div className="form-yes-no">
                  <div>✅</div>
                  <div>❌</div>
                </div>
              </div>
              <div className="feature-input">
                <input
                  type="text"
                  placeholder="Description (waxed, chunky, new...)"
                  name="stairs"
                  value={stairs}
                  onChange={event => setStairs(event.target.value)}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
      <form>
        <Link to={`/spots/${newSk8Map.id}`} className="nav-btn-link">
          <button className="nav-button" onClick={e => submitNewSk8Map(e)}>
            SUBMIT
          </button>
        </Link>
      </form>
    </section>
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
