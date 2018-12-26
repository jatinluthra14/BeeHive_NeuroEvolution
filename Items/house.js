class House{
    
    constructor() {
        this.x = windowWidth / 2;
        this.y = windowHeight / 2;
        this.r = 60;
        this.name = "House";
    }
    
    show() {
        stroke(255,0,0);
        strokeWeight(4);
        fill(255,255,255);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    
}