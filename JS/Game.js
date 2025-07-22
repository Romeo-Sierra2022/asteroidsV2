export default class Game {
    constructor(params) {
        console.log(params);
        if (params.highScorer) {
            this.highScorer = params.highScorer;
        } else {
            this.highScorer = "RSP";
        }
        if (params.highScore) {
            this.highScore = parseInt(params.highScore);
        } else {
            this.highScore = 0;
        }
    }
    run(startTime) {
        this.highScore = startTime
    }
}
