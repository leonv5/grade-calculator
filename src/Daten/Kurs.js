export default class Kurs {

    ncInPoints = 15;
    isSelected = false;

    constructor(name="Mathe", gewichtung="LK") {
        this.name = name
        // "MÜ", "LK", "EK"
        this.gewichtung = gewichtung
        // 4, 9, 13

        switch (gewichtung) {
            case "LK":
                this.points = 13;
                break;
            case "GK":
                this.points = 9;
                break;
            case "MÜ":
                this.points = 4;
                break;
            case "EK":
                this.points = 4;
                break;
            default:
                this.points = 13;
                break;
        }
    }

    setNcPoints(points) {
        this.ncInPoints = points
    }

    calculatePoints() {
        return this.points * this.ncInPoints;
    }

    reachedPercent() {
        return 100 / (this.points * 15) * (this.ncInPoints * this.points)
    }
}