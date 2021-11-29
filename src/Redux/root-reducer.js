const initialState = {
  todo: [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ],
  filter: 'All',
};

function todo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((task) => action.payload !== task.id),
      };

    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todo: state.todo.map((task) =>
          action.payload === task.id ? { ...task, completed: !task.completed } : task
        ),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todo: state.todo.map((task) => {
          if (action.payload.id === task.id) {
            return { ...task, name: action.payload.newName };
          }
          return task;
        }),
      };
    case "CHANGE_FILTER":
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
}

export default todo;
