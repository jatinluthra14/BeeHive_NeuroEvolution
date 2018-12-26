class Fire{
    
    constructor(num) {
        this.x = 0;
        this.y = random((num-1) * windowHeight / 3 ,num * windowHeight / 3);
        this.r = 40;
        this.name = "Fire";
    }
    
    show() {
        noStroke();
        fill(255,99,71);
        ellipse(this.x, this.y, this.r*2, this.r*2);
        this.x += 0.5
    }
    
}