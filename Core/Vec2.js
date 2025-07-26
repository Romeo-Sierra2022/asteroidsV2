export default class Vec2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    xMat3(m) {
        this.x = this.x * m[0] + this.y * m[1] + m[2];
        this.y = this.x * m[3] + this.y * m[4] + m[5];
    }
    static xMat3(iv, ov, m) {

        ov.x = iv.x * m[0] + iv.y * m[1] + m[2];
        ov.y = iv.x * m[3] + iv.y * m[4] + m[5];

    }
}
