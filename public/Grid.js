class Grid {

    constructor(x, y, val) {
        this.x = x;
        this.y = y;
        this.val = val;
    }

    show() {
        //noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r, this.r);
    }

    move() {
        this.theta = this.theta + PI / 80 * this.speed;
        this.x = this.centerX + this.dist * cos(this.theta);
        this.y = this.centerY + this.dist * sin(this.theta);
    }
}
