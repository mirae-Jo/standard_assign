import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

export const Form = ({ setTodos, todos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    <header
      style={{
        padding: "30px",
      }}
    >
      <div>
        <form
          onSubmit={function (e) {
            e.preventDefault();
            const newTodos = {
              id: uuid(),
              title: title,
              contents: contents,
              isDone: false,
            };
            return setTodos([...todos, newTodos]);
          }}
        >
          <div>
            <span>제목:</span>
            <input
              value={title}
              onChange={function (event) {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <span>내용:</span>
            <input
              value={contents}
              onChange={function (event) {
                setContents(event.target.value);
              }}
            />
          </div>
          <button type="submit">입력</button>
        </form>
      </div>
    </header>
  );
};
