import { mockAPISkateSpots } from "../../../sk8SpotData";

export const saveToLocal = (type, skateData) => {
  switch(type) {
    case "USER-SK8MAPS":
      localStorage.setItem('USER-SK8MAPS', JSON.stringify(skateData))
      break;
    case "SELECTED-SK8MAP":
      localStorage.setItem('SELECTED-SK8MAP', JSON.stringify(skateData))
      break;
    case "ALL-SK8MAPS":
      localStorage.setItem('ALL-SK8MAPS', JSON.stringify(skateData))
      break;
    default:
      break;
    }
  }
  
  export const getFromLocal = (type) => {
    const data = JSON.parse(localStorage.getItem(type))
    switch(type) {
      case "USER-SK8MAPS":
        return data ? data : null;
      case "SELECTED-SK8MAP":
        return data ? data : null;
      case "ALL-SK8MAPS":
        return data ? data : mockAPISkateSpots;
      default:
        break;
    }
    return
  }