export default class Kurs {

    ncInPoints = 15;

    constructor(name, gewichtung, points) {
        this.name = name
        this.gewichtung = gewichtung
        this.points = points
    }

    setNcPoints(points) {
        this.ncInPoints = points
    }

    calculatePoints() {
        return this.points * this.ncInPoints;
    }
}