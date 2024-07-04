import { useState } from "react";
import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  const [queryText, setQueryText] = useState("");

  const filteredList = filterItems(foods, queryText);

  function handleQueryText(e) {
    setQueryText(e.target.value);
  }

  return (
    <>
      <SearchBar query={queryText} onChange={handleQueryText} />
      <hr />
      <List items={filteredList} />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
