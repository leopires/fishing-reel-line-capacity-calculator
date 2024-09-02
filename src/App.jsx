import './App.css';
import {useState} from "react";
import calculateLineCapacity from "./services/LineCapacityCalculator";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import MainContent from "./components/layout/MainContent/MainContent";

function App() {

    const [lineDiameter, setLineDiameter] = useState('');
    const [lineLength, setLineLength] = useState('');

    const [lineCapacity, setLineCapacity] = useState([]);

    function calculate() {
        let items = [];
        for (let i = 0.15; i < 0.91;) {
            items.push({
                bitola: i.toFixed(2),
                capacidade: calculateLineCapacity(lineDiameter, lineLength, i).toFixed(2)
            });
            i += 0.01;
        }
        setLineCapacity(items);
    }

    return (
        <div className="App flex flex-col flex-grow">
            <Header/>
            <MainContent className="flex-grow">
                <>
                    <form>
                        <div className={"flex flex-col md:flex-row md:justify-center items-center gap-3"}>
                            <label htmlFor="lineDiameter">Bitola da Linha (em Milímetros - mm):</label>
                            <input name="lineDiameter" type="number" value={lineDiameter}
                                   onChange={newLineDiameter => setLineDiameter(newLineDiameter.target.value)} min={"0.15"} max={"1.0"} step={"0.01"}/>
                            <label htmlFor="lineLength">Capacidade (em Metros - m):</label>
                            <input name="lineLength" type="number" value={lineLength}
                                   onChange={newLineLength => setLineLength(newLineLength.target.value)}/>
                            <button className={"bg-slate-500 text-slate-100 pl-1 pr-1 pt-2 pb-2 w-40 rounded-md shadow-md hover:bg-slate-600 active:bg-slate-700"}
                                    type={"button"}
                                    onClick={calculate}>Calculate
                            </button>
                        </div>
                    </form>
                    <table className={"table-auto border-collapse border border-slate-100 w-full"}>
                        <thead>
                        <tr>
                            <th className={"border border-slate-300 bg-slate-500 p-4 text-slate-100"}>Bitola da linha (mm)</th>
                            <th className={"border border-slate-300 bg-slate-500 p-4 text-slate-100"}>Capacidade (em m)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {lineCapacity.map((item) => (
                            <tr className={"font-semibold"}>
                                <td className={"border border-slate-300 p-2"}>{item.bitola}mm</td>
                                <td className={"border border-slate-300 p-2"}>{item.capacidade}m</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            </MainContent>
            <Footer/>
        </div>
    );
}

export default App;
