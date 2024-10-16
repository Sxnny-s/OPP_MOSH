class Circle{
    constructor (radius){

    this.radius = radius

    let defaultLocation = { x: 0, y: 10};

    this.getDefaultLocation = function(){
        return defaultLocation
    }

    this.draw = function(){
        console.log('draw')
    }
   Object.defineProperty(this, 'defaultLocation', {
    get: function(){
        return defaultLocation;
    },
    set: function(value){
        if(!value.x || !value.y){
            throw new Error('invalid Location')
        }
        defaultLocation = value
    }
  })
}
}

const circle = new Circle(10)
circle.draw();

