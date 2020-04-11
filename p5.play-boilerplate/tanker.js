class tanker{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display(){
        stroke(255);
        strokeWeight(4);
        noFill();
        rect(this.x, this.y,this.width,this.height);
    }
}