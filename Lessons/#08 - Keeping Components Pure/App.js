function Cup({ guest }) {
  return <h2>Coffee cup for guest #{guest}</h2>;
}

export default function CoffeeGathering() {
  let cups = [];
  for (let i = 0; i < 12; i++) {
    cups.push(<Cup key={i} guest={i + 1} />);
  }
  return cups;
}
