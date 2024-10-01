//create object
let course = {
  courseNum: "N220",
  courseTitle: "Introduction to Media Application Development",
  totalSeats: 20,
  enrolled: 18,
  availability: function () {
    return this.totalSeats > this.enrolled;
  },
};

//print object properties in console
console.log(course.courseNum);
console.log(course.courseTitle);
console.log(course.totalSeats);
console.log(course.enrolled);
console.log("N220 Open: " + course.availability());

//add 2 students
course.enrolled = course.enrolled + 2;

//print new properties
console.log(course.courseNum);
console.log(course.courseTitle);
console.log(course.totalSeats);
console.log(course.enrolled);

console.log("N220 Open: " + course.availability());

//Built-In Objects
var tacocat = "wednesday";

function IUPUIWebsite() {
  console.log(window.tacocat);
  console.log(`Inner Width ${window.innerwidth}`);
  //console.log("Outer Width" + ${window.outerWidth});

  console.log(window.location);
}

function printPage() {
  window.print();
}

document.getElementById("dpDetails").innerHTML += course.courseTitle;

document.querySelector("#domain").innerHTML.HTML += "Hi";

const updatePTag = document.getElementById("update");

console.log(updatePTag.querySelector("#delete"));

console.log(String(100).length, 100);
console.log(String(100).includes("2"), 100);
console.log("100".replace("0", "2"), 100);
console.log("100".replaceAll("0", "2"), 100);
console.log("1,2,3,4".split(","));

console.log("  123  ".trim());
