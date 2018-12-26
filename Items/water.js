class Water{
    
    constructor() {
        this.x = random(windowWidth);
        this.y = random(windowHeight);
        this.r = 20;
        this.name = "Water";
        this.sprite = waterSprite;
    }
    
    show() {
        image(this.sprite, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
    }
    
}