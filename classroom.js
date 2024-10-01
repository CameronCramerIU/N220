let classroom = {
  studentList: [],
  className: "N220",
  maxStudents: 3,
  showStudents() {
    document.getElementById("students").innerHTML = "";

    this.studentList.forEach(function (studentName) {
      document.getElementById("students").innerHTML += studentName + "<br />";
    });
  },
};

function addNewStudent() {
  const currentStudents = classroom.studentList.length;
  if (currentStudents >= classroom.maxStudents) {
    console.log("No Seats Availible");
  } else {
    classroom.studentList.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}
