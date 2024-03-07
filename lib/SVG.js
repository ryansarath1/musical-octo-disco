class SVG{
    constructor(){
        this.textel=""
        this.shapeel=""
    }
    render(){
        return`<svg width="300" height="300">${this.shapeel}${this.textel}</svg>`
    }
    settext(text,color){
        this.textel=`<text x="150" y="120" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeel=shape.render()
    }
}
module.exports=SVG