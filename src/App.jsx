import './App.css';
import {useState} from "react";
import calculateLineCapacity from "./services/LineCapacityCalculator";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import MainContent from "./components/layout/MainContent/MainContent";
import Table from "./components/elements/Table/Table";

function App() {

    const [lineDiameter, setLineDiameter] = useState('0');
    const [lineLength, setLineLength] = useState('0');

    const [lineCapacity, setLineCapacity] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');
    const [showHelp, setShowHelp] = useState('hidden');

    function calculate() {
        setErrorMessage('');
        setLineCapacity([]);
        let lineDiameterAsFloat = parseFloat(lineDiameter);
        let lineLengthAsFloat = parseFloat(lineLength);
        if ((lineDiameterAsFloat < 0.15) || (lineDiameterAsFloat > 1.0)) {
            setErrorMessage('Bitola da linha inválida. Ela deve ser menor ou igual a 0,90.');
            return;
        }
        if (lineLengthAsFloat <= 0) {
            setErrorMessage('Capacidade de linha inválida.')
            return;
        }
        let items = [];
        for (let i = 0.15; i < 0.91;) {
            let capacidade = calculateLineCapacity(lineDiameterAsFloat, lineLengthAsFloat, i).toFixed(2);
            items.push({
                bitola: i.toFixed(2),
                capacidade: capacidade
            });
            i += 0.01;
        }
        setLineCapacity(items);
    }

    return (
        <div className="App flex flex-col h-screen flex-grow">
            <Header/>
            <MainContent className="flex-grow">
                <>
                    <form>
                        <div className={"flex flex-col gap-2 items-center"}>
                            <div className={"flex flex-col md:flex-row md:justify-center md:items-center gap-3"}>
                                <label htmlFor="lineDiameter">Bitola da Linha (em Milímetros - mm):</label>
                                <input name="lineDiameter" type="number" value={lineDiameter}
                                       onChange={newLineDiameter => setLineDiameter(newLineDiameter.target.value)}
                                       min={"0.15"} max={"1.0"} step={"0.01"} className={"md:w-1/12"}/>
                                <label htmlFor="lineLength">Capacidade (em Metros - m):</label>
                                <input name="lineLength" type="number" value={lineLength}
                                       onChange={newLineLength => setLineLength(newLineLength.target.value)}
                                       className={"md:w-1/12"}/>
                            </div>
                            {
                                errorMessage &&
                                <div className={"text-sm text-red-500 font-semibold"}>
                                    {errorMessage}
                                </div>
                            }
                            <button
                                className={"bg-slate-500 text-slate-100 pl-1 pr-1 pt-2 pb-2 w-40 self-center rounded-md shadow-md hover:bg-slate-600 active:bg-slate-700"}
                                type={"button"}
                                onClick={calculate}>Calculate
                            </button>
                        </div>
                    </form>
                    <div className={"bg-slate-300 pl-3 pr-3 pt-2 pb-2 border border-slate-400 rounded-md"}>
                        <div onClick={() => {
                            if (showHelp === 'hidden') {
                                setShowHelp('block');
                            } else {
                                setShowHelp('hidden');
                            }
                        }} className={"flex flex-row text-slate-700 hover:cursor-pointer"}>
                            <div className={"flex-1"}>
                                <h3 className={'text-xl font-semibold'}>Informações</h3>
                            </div>
                            <div>
                                {showHelp === 'hidden' ?
                                    (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                        </svg>) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5}
                                             stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                        </svg>
                                    )
                                }
                            </div>
                        </div>
                        <div className={showHelp}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et sollicitudin ligula, eu
                            gravida quam. Maecenas arcu mi, accumsan ut dui ac, vulputate scelerisque neque. Fusce
                            malesuada facilisis ornare. Aenean mi sem, porttitor nec magna vel, ullamcorper dapibus
                            massa. Mauris sit amet elit sed orci posuere auctor. Aenean quis neque tristique sapien
                            semper ullamcorper. Curabitur at semper ante. Cras interdum ligula elit. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Integer volutpat porttitor augue, at eleifend nisl
                            finibus vitae. Pellentesque dignissim lacus urna. Nulla vulputate a ante at cursus. Cras a
                            eleifend felis. Nunc eleifend magna tellus, ultrices vulputate diam scelerisque in.
                        </div>
                    </div>
                    {
                        lineCapacity.length > 0 &&
                        <Table items={lineCapacity}/>
                    }
                </>
            </MainContent>
            <Footer/>
        </div>
    );
}

export default App;
