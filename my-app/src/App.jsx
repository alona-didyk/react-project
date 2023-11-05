// import logo from "./logo.svg";
import "./App.css";
import core from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescription = ["Fundamental", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={core} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

/* THIS {} USED TO DESTRUCTURE THE FIRST PARAMETRE OF THIS FUNCTION */
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <main>
          <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
              <CoreConcept {...CORE_CONCEPTS[0]} />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
              {/* <CoreConcept
                title={CORE_CONCEPTS[1].title}
                description={CORE_CONCEPTS[1].description}
                image={CORE_CONCEPTS[1].image}
              /> */}
              {/* <CoreConcept
                title={CORE_CONCEPTS[2].title}
                description={CORE_CONCEPTS[2].description}
                image={CORE_CONCEPTS[2].image}
              />
              <CoreConcept
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
                image={CORE_CONCEPTS[3].image}
              /> */}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
