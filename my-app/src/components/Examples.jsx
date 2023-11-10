import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

// hooks is a functions that must be called inside of the react component or inside of other react hooks
// You must call it at the top level of the App
// useState allows to manage some component specific state which is some data stored by React which when changed will trigger this component function to which this hook belongs to re-execute
// state - its all about registering variables, that are handled by React and that are updated with a help of a function that provided by react that will also tell react that data changed and that will cause react to update the ui
export default function Examples() {
  // useState will return a value which you can store in variable and the value you will get is an array(it will have two elements: - the current data snapshot for this component execution cycle, the initial value of useState will be stored in selected topic, - a function that can be executed to update this state )
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
    // when you call a state updating function, react schedules this state update and it then re-executes component function
    // so therefore the updated value will be available after app component function executed again
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  // when we are setting props on a custom component, those props are not automatically forwarded to the jsx code used inside of that component
  return (
    <Section title="Examples" id="examples">
      {/* <h2>Examples</h2> */}
      {/* to create a list of buttons */}
      <Tabs
        //   we use string value for the built-in elements, if its custom component use {Section}
        // ButtonsContainer="menu"
        buttons={
          <>
            {" "}
            {/* we are passing handleSelect function as a value to onSelect prop in App.js and then this prop will be forwarded in TabButton.jsx to the onClick 
          this anonymous arrow function will make sure that this is actually value that passed as a value to onSelect and therefore onClick in TabButton.jsx
          we should invoke handleSelect because first arrow func will be executed and then handleSelect
          when we want to execute a function when event is called and we want to control how its going to be called and which arguments are going to be passed to it
          */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>{" "}
          </>
        }
      >
        {" "}
        {tabContent}
      </Tabs>
      <menu></menu>
      {/* {selectedTopic} */}
      {/* && will output if the first one is true */}
    </Section>
  );
}
