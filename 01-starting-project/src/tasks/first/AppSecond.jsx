import CardTask from "./CardTask";

import { dataTask} from "./dataTask";


function App() {
    return (
        <div id="card">
            <h1>Available Experts</h1>
           <CardTask {...dataTask[0]}/>
            <CardTask {...dataTask[1]}/>
        </div>
    );
}

export default App;