import './App.css';
import {useState} from "react";
import calculateLineCapacity from "./services/LineCapacityCalculator";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import MainContent from "./components/layout/MainContent/MainContent";

function App() {

    const [lineDiameter, setLineDiameter] = useState('');
    const [lineLength, setLineLength] = useState('');
    const [newChangedLineDiameter, setNewChangedLineDiameter] = useState('');

    const [newLineLength, setNewLineLength] = useState('');

    function calculate() {
        let l = calculateLineCapacity(lineDiameter, lineLength, newChangedLineDiameter);
        setNewLineLength(parseInt(l).toString());
    }

    return (
        <div className="App flex flex-col flex-grow">
            <Header/>
            <MainContent className="flex-grow">
                <>
                    <form>
                        <div className={"flex flex-col gap-3"}>
                            <label htmlFor="lineDiameter">Bitola da Linha</label>
                            <input name="lineDiameter" type="number" value={lineDiameter}
                                   onChange={newLineDiameter => setLineDiameter(newLineDiameter.target.value)}/>
                            <label htmlFor="lineLength">Capacidade</label>
                            <input name="lineLength" type="number" value={lineLength}
                                   onChange={newLineLength => setLineLength(newLineLength.target.value)}/>
                            <label htmlFor="newChangedLineDiameter">Nova bitola de linha</label>
                            <input name="newLineDiameter" type="number" value={newChangedLineDiameter}
                                   onChange={newChangedLineDiameter => setNewChangedLineDiameter(newChangedLineDiameter.target.value)}/>
                            <button className={"bg-slate-500 text-slate-100 pl-1 pr-1 pt-2 pb-2 drop-shadow-xl"} type={"button"} onClick={calculate}>Calculate</button>
                        </div>
                    </form>
                    <div> {newLineLength}</div>
                </>
            </MainContent>
            <Footer/>
        </div>
    );
}

export default App;
