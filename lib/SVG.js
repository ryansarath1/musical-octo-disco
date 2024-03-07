class SVG{
    constructor(){
        this.textel=""
        this.shapeel=""
    }
    render(){
        return`<svg width="300" height="300">${this.shapeel}${this.textel}</svg>`
    }
    settext(){
        this.textel=`<text x="100" y="100" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeel=shape.render()
    }
}
module.exports=SVG