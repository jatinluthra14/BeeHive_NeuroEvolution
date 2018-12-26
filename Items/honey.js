class Honey{
    
    constructor() {
        this.x = random(windowWidth);
        this.y = random(windowHeight);
        this.r = 20;
        this.name = "Honey";
        this.sprite = honeySprite;
    }
    
    show() {
        image(this.sprite, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
    }
    
}