const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
  test("test for a triangle with a black background", () => {
    const shape = new Triangle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<triangle points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Square test", () => {
  test("test for a square with a white background", () => {
    const shape = new Square();
    shape.setColor("white");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="" />'
    );
  });
});

describe("Circle test", () => {
  test("test for a circle with a green background", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});