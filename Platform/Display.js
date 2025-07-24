export default class Display {
    constructor(params) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.hasResized = false;
    }
    init() {
        document.title = "Asteroids";
        document.querySelector("body").innerHTML = null;
        document.querySelector("body").appendChild(this.canvas);
        window.addEventListener("resize", this._resize.bind(this));
        this._resize();
    }

    getDimensions() {
        return {
            width: this.width,
            height: this.height,
        };
    }
    getContext() {
        return this.ctx;
    }
    goFullScreen() {
        this.canvas.requestFullscreen()
    }
    exitFullScreen() {
        document.exitFullscreen()
    }
        _resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.hasResized = true;
    }
}
