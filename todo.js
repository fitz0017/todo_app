function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping:", index);
    remove(index);
  }
  return (
    <div className="todo">
      {todo.text}{" "}
      <button className="btn btn-outline-success opacity-30" onClick={remove}>
        Done
      </button>
    </div>
  );
}
