import { useOnlineStatus } from "./useOnlineStatus.js";

function StatusNet() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    alert("✅ Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconecting..."}
    </button>
  );
}

export default function App() {
  return (
    <>
      <StatusNet />
      <SaveButton />
    </>
  );
}
