// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { CORE_CONCEPTS } from "./data";
import { CoreConcept } from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

// hooks is a functions that must be called inside of the react component or inside of other react hooks
// You must call it at the top level of the App
// useState allows to manage some component specific state which is some data stored by React which when changed will trigger this component function to which this hook belongs to re-execute
// state - its all about registering variables, that are handled by React and that are updated with a help of a function that provided by react that will also tell react that data changed and that will cause react to update the ui
function App() {
  // useState will return a value which you can store in variable and the value you will get is an array(it will have two elements: - the current data snapshot for this component execution cycle, the initial value of useState will be stored in selected topic, - a function that can be executed to update this state )
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
    // when you call a state updating function, react schedules this state update and it then re-executes component function
    // so therefore the updated value will be available after app component function executed again
  }
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
          <section id="examples">
            <h2>Examples</h2>
            {/* to create a list of buttons */}
            <menu>
              {/* we are passing handleSelect function as a value to onSelect prop in App.js and then this prop will be forwarded in TabButton.jsx to the onClick 
              this anonymous arrow function will make sure that this is actually value that passed as a value to onSelect and therefore onClick in TabButton.jsx
              we should invoke handleSelect because first arrow func will be executed and then handleSelect
              when we want to execute a function when event is called and we want to control how its going to be called and which arguments are going to be passed to it
              */}
              <TabButton onSelect={() => handleSelect("components")}>
                Components
              </TabButton>
              <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect("props")}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect("state")}>
                State
              </TabButton>
            </menu>
            {/* {selectedTopic} */}
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
