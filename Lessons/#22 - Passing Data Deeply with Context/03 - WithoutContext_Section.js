export default function Section({ children }) {
  return (
    <section
      style={{ border: "1px solid black", borderRadius: 8, padding: 12 }}
    >
      {children}
    </section>
  );
}
