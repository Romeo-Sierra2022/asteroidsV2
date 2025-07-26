import Vec2 from "../../Core/Vec2.js";

export default class GameObject {
    constructor() {
        this.translate = new Vec2()
        this.rotate = 0;
        this.model = {}
        this.renderable = {}
        this.transformMatrix = []
        
    }
    update(dt) {}
    render(ctx) {
        const cosTheta = Math.cos(this.rotate)
        const sinTheta = Math.sin(this.rotate)
        this.transformMatrix = [
            cosTheta, -sinTheta, this.translate.x,
            sinTheta, cosTheta, this.translate.y,
            0,0,1        ]
        for(let i = 0; i < this.model.length; i++) {
            Vec2.xMat3(this.model[i], this.renderable[i], this.transformMatrix)
        }
        ctx.beginPath();
        ctx.moveTo(this.renderable[0].x + 20, this.renderable[0].y + 20);
        
        for (let i = 1; i <= this.renderable.length; i++) {
            const pointIndex = i % this.renderable.length;
            ctx.lineTo(
                this.renderable[pointIndex].x + 20,
                this.renderable[pointIndex].y + 20
            );
        }
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.stroke();
        // console.log(this.model, this.renderable)
        // throw new Error()
    }
    makeNoise() {}
}
