//declare todoList object
let todoList = {
  fullList: [],
  //function to show the list
  showList() {
    //erase the on-screen list to replace with new list
    document.getElementById("list").innerHTML = "";

    this.fullList.forEach(function (item) {
      document.getElementById("list").innerHTML += "<li>" + item + "</li>";
    });
  },
};

//function to add items to list
function addItem() {
  todoList.fullList.push(document.getElementById("item").value);
  todoList.showList();
}

//function to summarize list
function summarizeList() {
  document.getElementById("summary").innerHTML +=
    "Total Items: " +
    todoList.fullList.length + //total items
    "<br />First Item: " +
    todoList.fullList[0] + //first item
    "<br />Last Item: " +
    todoList.fullList[parseInt(todoList.fullList.length) - 1]; //last item
}
