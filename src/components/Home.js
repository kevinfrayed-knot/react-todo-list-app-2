

import Header from "./Header"; // Correct relative path to Header.js
import TodoList from "./TodoList"; // Correct relative path to TodoList.js

function Home() {
  return (
    <main>
      <Header title="React To Do List App v0.1.3" />
      <section className="todo-list-container">
        <TodoList title="FrayedKnot Task Manager v0.1.3" />
      </section>
    </main>
  );
}

export default Home;