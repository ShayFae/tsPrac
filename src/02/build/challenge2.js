var TodoItemsStatus;
(function (TodoItemsStatus) {
    TodoItemsStatus["In_Progress"] = "In-Progress";
    TodoItemsStatus["Todo"] = "Todo";
    TodoItemsStatus["Done"] = "Done";
})(TodoItemsStatus || (TodoItemsStatus = {}));
const todoItems = [
    { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: "in-progress" },
    { id: 3, title: "Write the best app in the world", status: "todo" },
];
function addTodoItem(todo) {
    const id = getNextId(todoItems);
    const newTodo = {
        id,
        title: todo,
        status: TodoItemsStatus.Todo,
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1;
}
const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
