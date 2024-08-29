import './App.css';
import {useState} from "react";

function App() {

  const [lineDiameter, setLineDiameter] = useState('');
  const [lineLength, setLineLength] = useState('');
  const [changedLineLength, setChangedLineLength] = useState('');
  const [newLineLength, setNewLineLength] = useState('');

  function calculate() {
    console.log('Line Diameter: ' + lineDiameter);
    console.log('Line Length: ' + lineLength);
    let l = (Math.pow(parseFloat(lineDiameter), 2) * parseFloat(lineLength)) / Math.pow(parseFloat(changedLineLength), 2);
    setNewLineLength(l.toString());
  }

  return (
    <div className="App">
      <form>
        <input name="lineDiameter" type="number" value={lineDiameter}
               onChange={newLineDiameter => setLineDiameter(newLineDiameter.target.value)}/>
        <input name="lineLength" type="number" value={lineLength}
               onChange={newLineLength => setLineLength(newLineLength.target.value)}/>
        <input name="changeLineDiameter" type="number" value={changedLineLength}
               onChange={newChangedLineDiameter => setChangedLineLength(newChangedLineDiameter.target.value)}/>
        <button type={"button"} onClick={calculate}>Calculate</button>
      </form>
      <div> {newLineLength}</div>
    </div>
  );
}

export default App;
