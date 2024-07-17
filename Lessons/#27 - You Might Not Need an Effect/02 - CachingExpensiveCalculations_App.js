import { useState, useEffect, useMemo } from "react";

//Wrong with effects
/* 
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState('');

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [visibleTodos, setVisibleTodos] = useState([]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  // ...
}
*/

//Right wihout effects, and with useMemo

import { useMemo, useState } from "react";

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");
  const visibleTodos = useMemo(() => {
    // ✅ Does not re-run unless todos or filter change
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
  // ...
}
