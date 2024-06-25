const person001 = {
  name: "Gregorio",
  description: "A good man",
  avatarUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const person002 = {
  name: "Thiago Thomas",
  description: "An amazing front-end developer",
  avatarUrl: "https://github.com/thiago-thomas.png",
  theme: {
    backgroundColor: "black",
    color: "green",
  },
};

export default function TodoList() {
  return (
    <>
      <div style={person001.theme}>
        <h1>{person001.name}</h1>
        <img
          style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          src={person001.avatarUrl}
          alt={person001.name}
        />
        <h2>{person001.description}</h2>
      </div>
      <div style={person002.theme}>
        <h1>{person002.name}</h1>
        <img
          style={{ borderRadius: "50%", width: "200px", height: "200px" }}
          src={person002.avatarUrl}
          alt={person002.name}
        />
        <h2>{person002.description}</h2>
      </div>
    </>
  );
}
