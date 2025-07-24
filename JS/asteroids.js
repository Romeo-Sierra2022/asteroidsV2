import Game from "./Game.js";

let hasUserInteracted = false;
let hasDOMLoaded = false;
let highScore, highScorer;

document.addEventListener("DOMContentLoaded", () => {
    hasDOMLoaded = true;
});

loadAndValidateHighScoreData();

let gameParams = { highScore, highScorer };

const game = new Game(gameParams);
window.addEventListener("beforeunload", (event) => {
    localStorage.setItem("highScore", game.highScore.toString());
    localStorage.setItem("highScorer", game.highScorer);
    alert(localStorage);
});
window.requestAnimationFrame(tick);
function tick(timeStamp) {
    hasUserInteracted = navigator.userActivation.hasBeenActive;
    const isGameReady = hasDOMLoaded && hasUserInteracted;
    if (isGameReady) {
        game.run(timeStamp);
    } else {
        window.requestAnimationFrame(tick);
    }
}

function loadAndValidateHighScoreData() {
    highScore = localStorage.getItem("highScore");
    if (highScore === "NaN" || highScore === "null") highScore = null;
    highScorer = localStorage.getItem("highScorer");
    if (highScorer === "NaN" || highScorer === "null") highScorer = null;
}
