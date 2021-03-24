import Jumbotron from "../src/components/jumbotron";
import jumboData from "./fixtures/jumbo";

export default function App() {
  return (
    <div className="App">
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <p>{item.title}</p>
            <p>{item.subTtile}</p>
            <p>{item.image}</p>
            <p>{item.alt}</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
