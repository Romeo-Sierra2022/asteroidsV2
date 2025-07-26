import Vec2 from "../../Core/Vec2.js";
import GameObject from "./GameObject.js";

export default class Player extends GameObject {
    constructor(displayDimensions) {
        super();
        this.translate = new Vec2(
            displayDimensions.width / 2,
            displayDimensions.height / 2
        );
        this.rotate = 0;
        this.isThrusting = false;
        this.maxVelocity = 750;
        this.velocity = new Vec2();
        this.acceleration = 10;
        this.damping = 0.99;
        this.rotationVelocity = 3;
        this.transformMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
        this.model = [
            new Vec2(0, -20),
            new Vec2(15, 20),
            new Vec2(7, 12),
            new Vec2(-7, 12),
            new Vec2(-15, 20),
        ];
        this.renderable = [
            new Vec2(0, -20),
            new Vec2(15, 20),
            new Vec2(7, 12),
            new Vec2(-7, 12),
            new Vec2(-15, 20),
        ];
    }
    update(updateObject) {
        this.isThrusting = updateObject.input.thrust;
        if (updateObject.input.left) {
            this.rotate -= updateObject.dt * this.rotationVelocity;
        }
        if (updateObject.input.right) {
            this.rotate += updateObject.dt * this.rotationVelocity;
        }
        const cosTheta = Math.cos(this.rotate);
        const sinTheta = Math.sin(this.rotate);
        if (this.isThrusting) {
            this.velocity.x += sinTheta * updateObject.dt * this.acceleration;
            this.velocity.y += -cosTheta * updateObject.dt * this.acceleration;
        }
        this.translate.x += this.velocity.x;
        this.translate.y += this.velocity.y;
        this.velocity.x *= this.damping;
        this.velocity.y *= this.damping;
        if(this.translate.x < 0) this.translate.x = updateObject.displayDimensions.width
        if(this.translate.y < 0) this.translate.y = updateObject.displayDimensions.height
        if(this.translate.x > updateObject.displayDimensions.width) this.translate.x = 0
        if(this.translate.y > updateObject.displayDimensions.height) this.translate.y = 0
        
        
    }
}
