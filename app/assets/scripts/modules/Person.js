function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function() {
    console.log("Hello, name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}
