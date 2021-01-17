import {getFromLocal, saveToLocal} from './localStorage'

export const myReducer = (state, action) => {
  switch (action.type) {
    case "SYNC_DATA":
      const userMaps = getFromLocal("USER-SK8MAPS")
      const allMaps = getFromLocal("ALL-SK8MAPS")
      return { ...state, storedSpots: allMaps, userMaps: userMaps };
    case "UPDATE_SELECTED_SPOT":
      const selectedSpot = action.selectedSpot;
      saveToLocal("SELECTED-SK8MAP", selectedSpot);
      return { ...state, selectedSpot: selectedSpot };
    case "CHANGE_VIEW":
      const currentView = action.view;
      return { ...state, appView: currentView };
    case "ADD_CONFIRMATION_MARKER":
      const marker = action.marker;
      return { ...state, marker: marker };
    case "CREATE_SK8MAP":
      const newSk8Map = action.newSk8Map
      return { ...state, newSk8Map: newSk8Map };
    case "SAVE_NEW_SK8MAP":
      const newUserSk8Map = action.newSk8Map
      const updatedSk8Maps = [...state.storedSpots, newUserSk8Map]
      saveToLocal("ALL-SK8MAPS", updatedSk8Maps)
      saveToLocal("USER-SK8MAPS", updatedSk8Maps)
      return { ...state, storedSpots: updatedSk8Maps };
    default:
      return state;
  }
};