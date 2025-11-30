
import {useState} from "react";
import { CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";


function App() {

    const [selectedTopic, setSelectedTopic] = useState();

    const handleClick = selectedButton => {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    };

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        )
    }

    return (
        <div>
             <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts!</h2>
                    <ul>
                        {/*<CoreConcept*/}
                        {/*title={CORE_CONCEPTS[0].title}*/}
                        {/*description={CORE_CONCEPTS[0].description}*/}
                        {/*image={CORE_CONCEPTS[0].image}*/}
                        {/*/>*/}
                        {/*<CoreConcept*/}
                        {/*    {...CORE_CONCEPTS[1]}*/}
                        {/*/>*/}
                        {/*<CoreConcept*/}
                        {/*    {...CORE_CONCEPTS[2]}*/}
                        {/*/>*/}
                        {/*<CoreConcept*/}
                        {/*    {...CORE_CONCEPTS[3]}*/}
                        {/*/>*/}
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept key={concept.title} {...concept}/>
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton selectButton={selectedTopic === "components"} onSelect={() => handleClick('components')}>Components</TabButton>
                        <TabButton selectButton={selectedTopic === "jsx"} onSelect={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton selectButton={selectedTopic === "props"} onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton selectButton={selectedTopic === "state"} onSelect={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {tabContent}
                    {/*{!selectedTopic ? <p>Please select a topic.</p> :*/}
                    {/*    <div id="tab-content">*/}
                    {/*        <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
                    {/*        <p>{EXAMPLES[selectedTopic].description}</p>*/}
                    {/*        <pre>*/}
                    {/*         <code>*/}
                    {/*           {EXAMPLES[selectedTopic].code}*/}
                    {/*         </code>*/}
                    {/*     </pre>*/}
                    {/*    </div>*/}
                    {/*}*/}
                </section>
            </main>
        </div>
    );
}

export default App;
