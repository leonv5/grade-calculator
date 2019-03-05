import { ADD_FACH, UPDATE_NC } from "./constants";
import Kurs from "../Daten/Kurs";

const defaultFächer = [
    new Kurs("Mathe", "LK"),
    new Kurs("Englisch", "LK"),
    new Kurs("Deutsch", "MÜ"),
    new Kurs("Biologie", "EK"),
    new Kurs("Geschichte", "GK"),
    new Kurs("Geografie", "GK"),
    new Kurs("Sport", "EK"),
    new Kurs("Französisch", "MÜ"),
]

export const fächer = (state=[], action) => {
    switch (action.type) {
        case ADD_FACH: 
            return [...state, action.payload]
        default:
            return state
    }
}

export const nc = (state=0.7, action) => {
    if(action.type === UPDATE_NC){
        return action.payload
    }else {
        return state
    }
}