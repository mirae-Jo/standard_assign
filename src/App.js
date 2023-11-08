import { useState } from "react";
import uuid from "react-uuid";
import { Form } from "./components";

function App() {
  const initialState = [
    { id: uuid(), title: "제목1", contents: "내용1", isDone: false },
    { id: uuid(), title: "제목2", contents: "내용2", isDone: true },
    { id: uuid(), title: "제목3", contents: "내용3", isDone: false },
  ];
  const [todos, setTodos] = useState(initialState);

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <main
        style={{
          padding: "30px",
        }}
      >
        <h1>진행중</h1>
        {todos
          .filter(function (todo) {
            return todo.isDone === false;
          })
          .map(function (todo) {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid #bbb",
                  margin: "10px",
                  padding: "10px",
                  width: "250px",
                }}
              >
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <button
                  onClick={function () {
                    const newTodos = todos.map(function (item) {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  완료
                </button>
                <button
                  onClick={function () {
                    const delTodo = todos.filter((item) => item.id !== todo.id);
                    return setTodos(delTodo);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
        <h1>완료!</h1>
        {todos
          .filter(function (todo) {
            return todo.isDone === true;
          })
          .map(function (todo) {
            return (
              <div
                key={todo.id}
                style={{
                  border: "1px solid #bbb",
                  margin: "10px",
                  padding: "10px",
                  width: "250px",
                }}
              >
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <button
                  onClick={function () {
                    const newTodos = todos.map(function (item) {
                      if (item.id === todo.id) {
                        return { ...item, isDone: !item.isDone };
                      } else {
                        return item;
                      }
                    });
                    setTodos(newTodos);
                  }}
                >
                  취소
                </button>
                <button
                  onClick={function () {
                    const delTodo = todos.filter((item) => item.id !== todo.id);
                    return setTodos(delTodo);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          })}
      </main>
    </>
  );
}

export default App;
