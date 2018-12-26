class Bee {
    
    constructor(brain) {
        this.x = random(windowWidth)
        this.y = random(windowHeight)
        this.angle = 90;
        this.a = 0;
        this.b = 0;
        this.name = "Bee";
        this.r = 35;
        this.intstat = {'Water':0, 'Fire':0,'Honey':0, 'House':0};
        this.honey = 0;
        this.fire = 0;
        this.score = 0;
        this.life = 10;
        if (brain) {
            this.brain = brain.copy();
        } else {
            this.brain = new NeuralNetwork(5, 5, 3);
        }
        this.fitness = 0;
        this.sprite = beeSprite;
    }
    
    mutate() {
        this.brain.mutate(0.1);
    }
    
    show() {
        image(this.sprite, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);
        // var a = p5.Vector.fromAngle(radians(this.angle));
        // var temp_x = this.x;
        // var temp_y = this.y;        
        // while(temp_x < windowWidth && temp_x > 0 && temp_y > 0 && temp_y < windowHeight) {
            // temp_x += a.x;
            // temp_y += a.y;
        // }
        // stroke(255,0,0);
        // strokeWeight(2);
        // line(this.x, this.y, temp_x, temp_y);
        // this.a = (temp_y - this.y) / (temp_x - this.x);
        // this.b = this.y - this.a*this.x
    }
    
    move() {
        angleMode(DEGREES);
        var a = p5.Vector.fromAngle(radians(this.angle));
        this.x += 2*a.x;
        this.y += 2*a.y;
    }
    
    left() {
        this.angle -= 5;
        if (this.angle < 0) {
            this.angle += 360;
        }
        this.angle = this.angle % 360;
    }
    
    right() {
        this.angle += 5;
        this.angle = this.angle % 360;
    }
    
    checkInt(items) {
        this.intstat = {'Water':0, 'Fire':0, 'Honey':0, 'House':0}
        var a = p5.Vector.fromAngle(radians(this.angle));
        var temp_x = this.x;
        var temp_y = this.y;        
        while(temp_x < windowWidth && temp_x > 0 && temp_y > 0 && temp_y < windowHeight) {
            temp_x += a.x;
            temp_y += a.y;
            for ( var item of items) {
                if (dist(temp_x, temp_y, item.x, item.y) < item.r) {
                    this.intstat[item.name] = 1;
                }
            }
        }
        for (var item of items) {
            var overlap = dist(this.x,this.y,item.x,item.y) < (item.r + this.r)
            if (item.name == "House" && overlap == true) {
                if (this.honey > 0) {
                    this.score += 2;
                }
                this.honey = 0;
            } else if (item.name == "Honey" && overlap == true) {
                if (this.honey == 0) {
                    this.honey = 1;
                    this.score +=0.5
                    items.splice(items.indexOf(item),1);
                    items.splice(0,0,new Honey());
                }
                
            } else if (item.name == "Fire" && overlap == true) {
                this.fire = 1;
            } else if (item.name == "Water" && overlap == true) {
                this.fire = 0;
                this.life = 10;
                items.splice(items.indexOf(item),1);
                items.splice(0,0,new Water());
            }
        }
    }
    
    think() {
        var inputs = [this.intstat["Water"], this.intstat["Fire"], this.intstat["Honey"], this.intstat["House"], this.honey];
        var outputs = this.brain.predict(inputs);
        var output = outputs.indexOf(Math.max(...outputs));
        switch(output) {
            case 0:
                this.move();
                break;
            case 1:
                this.left();
                break;
            case 2:
                this.right();
                break;
            default:
                console.log("Default!");
        }
    }
}