import Display from "../Platform/Display.js";
import InputSystem from "../Platform/InputSystem.js";
import SoundSystem from "../Platform/SoundSystem.js";
import Player from "./GameObjects/player.js";

export default class Game {
    constructor(params) {
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
        this.lastime = 0;
        this.gameObjects = [];
    }
    run(startTime) {
        this.lastime = startTime;
        this.display = new Display();
        this.display.init();
        this.display.goFullScreen();
        this.inputSystem = new InputSystem();
        this.soundSystem = new SoundSystem();
        this.soundSystem.init();
        window.requestAnimationFrame(this.tick.bind(this));
        this.gameObjects.push(new Player(this.display.getDimensions()))
        // Sound/Display/Input
    }
    tick(timeStamp) {
        const elapsedTime = timeStamp - this.lastime;
        const dt = elapsedTime / 1000;
        if(dt > 0.03) console.log(dt)
        this.lastime = timeStamp;
        this.update(dt);
        this.render();
        this.makeNoise();
        window.requestAnimationFrame(this.tick.bind(this));
    }
    update(dt) {
        const updateObject = {
            dt: dt,
            input: this.inputSystem.getInputObject(),
            displayDimensions: this.display.getDimensions(),
        };
        this.gameObjects.forEach((gameObject) => {
            gameObject.update(updateObject);
        });
    }
    render() {
        this.display.clear()
        this.gameObjects.forEach((gameObject) => {
            gameObject.render(this.display.getContext());
        });
    }
    makeNoise() {
        this.gameObjects.forEach((gameObject) => {
            gameObject.makeNoise();
        });
    }
}
