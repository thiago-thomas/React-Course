function Avatar({ person, size }) {
  return (
    <img
      src={"https://i.imgur.com/" + person.imageId + ".jpg"}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div style={{ padding: "20px", borderRadius: "8px", border: "1px solid" }}>
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card>
        <Avatar person={{ name: "Lin", imageId: "1bX5QH6" }} size={200} />
        <h1>I am Lin</h1>
      </Card>
      <Avatar person={{ name: "Katsuko", imageId: "YfeOqp2" }} size={200} />
      <Avatar person={{ name: "Aklilu", imageId: "OKS67lh" }} size={200} />
    </div>
  );
}
