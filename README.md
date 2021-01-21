>[SK8MAPS deployed site](https://sk8maps.herokuapp.com/SK8MAPS/)

---

### SK8MAPS 
###### Find the things that you want to skate on and create spots for others  

---

![sk8-welcome](https://user-images.githubusercontent.com/66697338/104991928-1b900580-59dd-11eb-85b2-3bf5b594c995.png)

*Homepage*


## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Reflection](#reflection)
* [Team](#team)


## Introduction

### Overview
SK8MAPS is a user sourced recommendation app for finding user-added skate spots. Users can filter spots by the type of features they are looking for, they can also add spots with their own details and can provider a link for an image.

SK8MAPS is a SPA built with React and designed to meet project requirements in the rubric laid out [here](https://frontend.turing.io/projects/module-3/binary-challenge.html), a solo project designed specifically for Mod 3 class 2008FE front end engineering students. The project seeks to challenge the totality of learning of students up to this point, pulling together their core-stack knowledge of HTML, CSS, JS, DOM interaction, REST APIs, TDD (test driven development), and extending that ability to self-teach to build out a React app and incorporate a new technology - in this case the Google Maps API.

The project emphasises React fundamentals, such as state management/synching across components, and the flow and management of asynchronous operations (both in production code, and inside of testing suites), pushing students to think carefully and critically about component architecture and modularity, and expected user flow and behavior. The nature of the project encourages employing professional 'soft' skills in the planning and project management stages - utilizing wireframing and mind-mapping, and managing project workflow with Issues and PRs through the **Agile** methodology on GitHub Project Board.

Lastly, be sure to click this here when you see it:
<details>
  <summary>**Under the Hood**</summary>
There's more info under here about the functionality being described!
</details>

### Tech Stack
* Google Maps API
* React + Hooks
* Proptypes
* JavaScript
* HTML
* CSS
* React Router
* Jest (TDD)
* REST API

## Features 

![sk8-search](https://user-images.githubusercontent.com/66697338/104991926-1af76f00-59dd-11eb-8f1c-4aa6da6b5a83.png)

*Search by feature*

**SEARCH**

The interface is simple - a user chooses from a variety of filters to return only places that contain those features. Local storage allows a user to retain their own additions and they will populate the map. Clicking on a marker will pull up more information on that place and provide a link to the Details view. In Add a Spot view, users can click the map to show a confirmation window. Clicking confirm will take them to the form.

Spots are currently sourced through a canned set of data provided with the app. There is no API with such offerings, so this app is more of a proof of concept and ideally a prototype for the real thing. The API calls are being made, though, to Google Maps API, leveraging the NPM package `@google-maps-react/api`. The API takes in various values including a lat/long and functionality for a list of markers. 

![infobox](https://user-images.githubusercontent.com/66697338/104993496-24360b00-59e0-11eb-97c6-158174cc8ce1.gif)

<details>
  <summary>**Under the Hood**</summary>

---

The Google Maps API was a tough cookie to crack. While we've been used to working with traditional JSON information, that we usually parse into presentable text in one form or another, the maps API returns what is essentially a portion of a map. Each request instantiates a new portion of the map, depending on the bounding locations, zoom level, lat/lng, etc.

Once the bounds are set and zoom/lat/lng determined, the API will be able to determine whether or not the array of marker objects being passed in will render on that portion of the map. Clicking a marker passes in a lat/lng at that mouse click location on the map, popping an information box on the location recieved from the prop being passed in.

![skate-map-infobox](https://user-images.githubusercontent.com/66697338/104991917-1763e800-59dd-11eb-8dc7-c36b8d40cc23.png)

That is the general understanding that guides implementation of various map objects

---

</details>

![sort](https://user-images.githubusercontent.com/66697338/104994159-3d8b8700-59e1-11eb-887d-d4299e093696.gif)

*Sort*

**SORT MAPS** 

Users are able to click and sort sk8maps by what they want out of a spot! Clicking on the link of the pulled up info window will navigate the user to details for that place. The details page is somewhat sparse with functionality at the moment for automatically presenting data in a pleasing way.

![SK8MAP-details](https://user-images.githubusercontent.com/66697338/105081308-3ef39880-5a4f-11eb-87d3-df18c07de23b.png)

<details>
  <summary>**Under the Hood**</summary>

---

The logic for this was fun. Passing the array of places as a prop first to a 'sort view' component allowed filtering of the data before passing it as a prop to the Map component, which is common to another page. This allows us to leave the Map component unchanged, instead grooming the data at a higher level. It's lean, it works, it's pleasing!

---

</details>

![Add](https://media.giphy.com/media/gS0wPqF1F7wRiSqeON/giphy.gif)

*Add a map*

**ADD A SK8MAP**

Sk8maps can also be added! They are only stored locally, so your friends won't be able to see them...YET! There are very real plans to implement a database to buildout a truly robust app. Clicking into the Add a SK8MAP view will allow you to click on the map to add a spot, then confirm to be taken to a form. When you add a spot, you will see it in your results. If you want to get rid of spots, you can clear your local storage.

![sk8-form](https://user-images.githubusercontent.com/66697338/104991922-1a5ed880-59dd-11eb-8d45-d6d467f5cc27.png)

<details>
  <summary>**Under the Hood**</summary>

---

Similar to the logic of adding a marker, or an infobox, clicking on the map in add view passes a prop to the Map component letting it know that we are now in 'add-view', so clicking on the map (not a marker) provides different behavior. Clicking on a spot passes in the `latlng` property of the mouse event (a function of the Google Maps API).

---

</details>


## Reflection

#### Wins

* Stable App
* Decoding the google maps API
* Solid UX with little confusion
* Code is fairly symantic

#### Challanges

* Extremely limited time frame - 6 days from assignment to completion
* Huge time loss running into trouble testing the combination of useState/useReducer - took five hours to build into the app, took five hours to take back out (already built on top of the refactored code, would not make sense to revert to previous commit)

#### Future

* Functionality to clear your added spots
* System to keep track of who added what
* Reintroduce advanced hooks
* Add scoring for overall and each feature
* More conditional formatting and guarding in the Form
* Add 'get directions'
* Add a DB/API by building out an express server and tie into postgreSQL to get away from local storage
* Add user accounts(!) 

## Team

<h4>Scott Brabson</h4>
<img src="https://avatars1.githubusercontent.com/u/66697338?s=460&u=3d2e338fdeb625c1940a87b1cfdb7ba6e7d16c5c&v=4" alt="Coding Magician"
 width="150" height="auto" style="float: left" />

*FE Engineering student at Turing School who has found no end to the joy that is speaking the language of JS.*

[GitHub Profile](https://github.com/brabbuss)
