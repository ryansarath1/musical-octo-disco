const inquirer = require("inquirer")
const fs = require("fs")
const SVG = require("./lib/SVG")
const {Circle, Triangle, Square} =require("./lib/shape")

function askUser() {
    inquirer.prompt([
        {
            type:"input",
            name:"text",
            message:"enter 3 letters",
        },
        {
            type:"input",
            name:"textcolor",
            message:"enter color for text",
        },
        {
            type:"input",
            name:"backgroundcolor",
            message:"What color would you like your shape",
        },
        {
            type:"list",
            name:"shape",
            message:"choose a shape",
            choices:["Circle", "Triangle", "Square"],
        },
    ]).then((promptanswers)=>{
        let choosingshape;
        switch(promptanswers.shape){
            case "Circle":
                choosingshape=new Circle();
            break;
            case "Triangle":
                choosingshape=new Triangle();
            break;
            case "Square":
                choosingshape=new Square();
            break;    

        }
        choosingshape.setColor(promptanswers.backgroundcolor)
        const myshape=new SVG()
        myshape.setShape(choosingshape)
        myshape.settext(promptanswers.text,promptanswers.textcolor)
        promptanswers.length>3?console.log("must be 3 characters or less"): fs.writeFileSync("myshape.svg", myshape.render())
    })
    

}
askUser()