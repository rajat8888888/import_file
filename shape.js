import {Circle} from 'circle';
class Shape{
constructor(color,shape,redius){
    this.color=color;
    this.shape=shape;
    this.redius=redius;
}
shape(){
    console.log(this.shape);
}
calculateArea(){
    console.log(this.calculateArea);
}
}
 let s=new Shape(green,squre,5);
