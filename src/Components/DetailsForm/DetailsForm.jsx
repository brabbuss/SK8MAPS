import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./DetailsForm.css";

const DetailsForm = ({ newSk8Map, saveNewSk8Map }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState(null);
  const [curbs, setCurbs] = useState([false, ""]);
  const [flats, setFlats] = useState([false, ""]);
  const [rails, setRails] = useState([false, ""]);
  const [stairs, setStairs] = useState([false, ""]);
  const [difficulty, setDifficulty] = useState(0);
  // const [security, setSecurity] = useState("");
  // const [hazards, setHazards] = useState("");
  // const [publicSkating, setPublicSkating] = useState("");

  const makeNewSk8MapObject = () => {
    const newSk8MapObject = {
      id: newSk8Map.id,
      difficulty: difficulty,
      title: title,
      description: description,
      location: newSk8Map.location,
      features: [
        {
          type: "Curbs",
          has: curbs[1] ? true : curbs[0],
          condition: 5,
          description: curbs[1],
        },
        {
          type: "Flats",
          has: flats[1] ? true : flats[0],
          condition: 3,
          description: flats[1],
        },
        {
          type: "Rails",
          has: rails[1] ? true : rails[0],
          condition: 3,
          description: rails[1],
        },
        {
          type: "Stairs",
          has: stairs[1] ? true : stairs[0],
          condition: 5,
          description: stairs[1],
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
      images: !images?.includes('https://www.' || 'http://www.' || 'http') ? [null] : [images],
    };
    return newSk8MapObject;
  };

  const submitNewSk8Map = e => {
    // if (title && description) {
    //   if (curbs[0] || flats[0] || rails[0] || stairs[0]) {
    saveNewSk8Map(makeNewSk8MapObject());
    clearInputs();
    //   }
    // }
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
    // setSecurity("");
    // setHazards("");
    // setPublicSkating("");
  };

  const form = () => {
    return (
      <section className="form">
        <div className="detail-view">
          <div className="form-left">
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
              <textarea
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
          <div className="form-right">
            <div className="form-features-section">
              <article className="form-feature-details form-feature-input-wrapper">
                <div className="form-feature-type">
                  <h3>Curbs</h3>
                  <div className="form-yes-no">
                    <div
                      className={`yes-no-icons ${
                        curbs[0] ? "has" : "has-not"
                      }`}>
                      ✅
                    </div>
                    <div
                      className={`yes-no-icons ${
                        !curbs[0] ? "has" : "has-not"
                      }`}>
                      ❌
                    </div>
                  </div>
                </div>
                <div className="form-feature-input">
                  <textarea
                    type="text"
                    placeholder="Description (waxed, chunky, new...)"
                    name="curbs"
                    value={curbs[1]}
                    onChange={event =>
                      setCurbs([curbs[1] ? true : false, event.target.value])
                    }
                  />
                </div>
              </article>
              <article className="form-feature-details form-feature-input-wrapper">
                <div className="form-feature-type">
                  <h3>Flats</h3>
                  <div className="form-yes-no">
                    <div
                      className={`yes-no-icons ${
                        flats[0] ? "has" : "has-not"
                      }`}>
                      ✅
                    </div>
                    <div
                      className={`yes-no-icons ${
                        !flats[0] ? "has" : "has-not"
                      }`}>
                      ❌
                    </div>
                  </div>
                </div>
                <div className="form-feature-input">
                  <textarea
                    type="text"
                    placeholder="Description (waxed, chunky, new...)"
                    name="flats"
                    value={flats[1]}
                    onChange={event =>
                      setFlats([flats[1] ? true : false, event.target.value])
                    }
                  />
                </div>
              </article>
              <article className="form-feature-details form-feature-input-wrapper">
                <div className="form-feature-type">
                  <h3>Rails</h3>
                  <div className="form-yes-no">
                    <div
                      className={`yes-no-icons ${
                        rails[0] ? "has" : "has-not"
                      }`}>
                      ✅
                    </div>
                    <div
                      className={`yes-no-icons ${
                        !rails[0] ? "has" : "has-not"
                      }`}>
                      ❌
                    </div>
                  </div>
                </div>
                <div className="form-feature-input">
                  <textarea
                    type="text"
                    placeholder="Description (waxed, chunky, new...)"
                    name="rails"
                    value={rails[1]}
                    onChange={event =>
                      setRails([rails[1] ? true : false, event.target.value])
                    }
                  />
                </div>
              </article>
              <article className="form-feature-details form-feature-input-wrapper">
                <div className="form-feature-type">
                  <h3>Stairs</h3>
                  <div className="form-yes-no">
                    <div
                      className={`yes-no-icons ${
                        stairs[0] ? "has" : "has-not"
                      }`}>
                      ✅
                    </div>
                    <div
                      className={`yes-no-icons ${
                        !stairs[0] ? "has" : "has-not"
                      }`}>
                      ❌
                    </div>
                  </div>
                </div>
                <div className="form-feature-input">
                  <textarea
                    type="text"
                    placeholder="Description (waxed, chunky, new...)"
                    name="stairs"
                    value={stairs[1]}
                    onChange={event =>
                      setStairs([stairs[1] ? true : false, event.target.value])
                    }
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
        <form>
          <Link to={`/spots/${newSk8Map.id}`} className="form-btn nav-btn-link">
            <button className="nav-button" onClick={e => submitNewSk8Map(e)}>
              SUBMIT
            </button>
          </Link>
        </form>
      </section>
    );
  };

  return newSk8Map ? form() : <Redirect to="/" />;
};

export default DetailsForm;
