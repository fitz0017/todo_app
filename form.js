// user input - includes validation
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form
      className="todo bg-white border border-top border-info border-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-info">Add</button>
    </form>
  );
}
