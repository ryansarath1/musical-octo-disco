class Shape{
    constructor(){
        this.color=""
    }
    setColor(color){
        this.color=color
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="100" cy="100" r="100" fill="${this.color}"/>`
    }
}
class Square extends Shape{
    render (){
        return `<rect x="10" y="10" width="200" height="100" stroke="red" stroke-width="6" fill="${this.color}"/>`
    }
}
class Triangle extends Shape{
    render (){
        return `<polygon points="150, 2 300, 200 5, 200" fill="${this.color}"/>`
    }
}
module.exports={Circle, Square, Triangle}