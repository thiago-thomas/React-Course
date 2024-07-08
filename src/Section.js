import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section
      style={{ border: "1px solid black", borderRadius: 8, padding: 12 }}
    >
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
