import {useState} from 'react';
import Counter from "./components/Counter";

function App() {
  const [input, setInput] = useState("");
  const [times, setTimes] = useState(33);
  function register(){
    let no_times = Number(input);
    console.log(no_times)
    setTimes(no_times);
    setInput("");
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h4>What's the number of count?</h4>
      <div className="input_field">
        <input value={input} onChange={e => setInput(e.target.value)} className="no_of_times" type="text" />
        <button onClick={register}>Submit</button>
      </div>
      <Counter times={times}/>
    </div>
  );
}

export default App;
