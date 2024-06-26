import Father from "./Father";
import Child from "./Child";

export default function App() {
  return (
    <Father>
      <Child text="Hi i am the child node" />
    </Father>
  );
}
