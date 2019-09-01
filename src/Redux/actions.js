import { ADD_FACH, UPDATE_NC } from "./constants";

export const addFach = (fach) => {
    return {type: ADD_FACH, payload: fach}
}

export const updateNC = (fächer) => {
    let points = 0;
    fächer.forEach(item => {
        points += item.calculatePoints();
        return points + item.calculatePoints()
    });
    let nc = 17/3 - (points/180);
    let ncRounded = Math.abs(Math.floor( nc * 10 ) / 10);
    console.log(nc);
    return {type: UPDATE_NC, payload: ncRounded}
}