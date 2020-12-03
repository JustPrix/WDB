console.log('working');
const todolist = [];
let input = prompt('What would you like to do?');
while (input !== 'quit' && input !== 'q') {
  if (input === 'new') {
    const addItem = prompt('Enter new todo item!');
    todolist.push(addItem);
    console.log(`${addItem} added to the list!`);
  } else if (input === 'list') {
    console.log('********************');
    if (todolist.length === 0) {
      console.log('Empty List! Try adding items!');
    }
    for (let i = 0; i < todolist.length; i++) {
      console.log(`${i}: ${todolist[i]}`);
    }
    console.log('********************');
  } else if (input === 'delete') {
    const deleteItem = parseInt(prompt('Enter index of todo to delete!'));
    if (todolist.length <= deleteItem) {
      console.log('Invalid index!');
    } else if (!Number.isNaN(deleteItem)) {
      let deletedItem = todolist.splice(deleteItem, 1);
      console.log(`${deletedItem} was deleted!`);
    } else {
      console.error('Enter a number!');
    }
  } else {
    input = alert('Invalid command! Try again!');
  }
  input = prompt('What would you like to do?');
}
console.log('OK, YOU QUIT THE APP');
