import './App.css';
import {useState} from "react";
import calculateLineCapacity from "./services/LineCapacityCalculator";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import MainContent from "./components/layout/MainContent/MainContent";
import Table from "./components/elements/Table/Table";
import ExpandablePanel from "./components/layout/ExpandablePanel/ExpandablePanel";

function App() {

    const [lineDiameter, setLineDiameter] = useState('0');
    const [lineLength, setLineLength] = useState('0');

    const [lineCapacity, setLineCapacity] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');

    function calculate() {
        setErrorMessage('');
        setLineCapacity([]);
        let lineDiameterAsFloat = parseFloat(lineDiameter);
        let lineLengthAsFloat = parseFloat(lineLength);
        if ((!lineDiameter) || (lineDiameterAsFloat < 0.15) || (lineDiameterAsFloat > 1.0)) {
            setErrorMessage('Bitola da linha inválida. Valores válidos precisam estar entre 0.15 e 0.90 milímetros.');
            if (!lineDiameter) {
                setLineDiameter('0');
            }
            return;
        }
        if ((!lineLength) || (lineLengthAsFloat <= 0)) {
            setErrorMessage('Capacidade de linha inválida. O valor informado deve ser maior que 0.')
            if (!lineLength) {
                setLineLength('0');
            }
            return;
        }
        let items = [];
        for (let i = 0.15; i < 0.91;) {
            let capacidade = Math.round(calculateLineCapacity(lineDiameterAsFloat, lineLengthAsFloat, i)).toFixed(2);
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
                    <ExpandablePanel title={'Sobre este aplicativo'}>
                        <p>Este aplicativo tem como objetivo fornecer um cálculo estimado da capacidade de linha em
                            carretilhas e molinetes, para uma determinada bitola de linha.</p>
                        <p>Para fazer o cálculo, basta seguir os seguintes passos:</p>
                        <ul className={"list-decimal list-inside ml-2 mt-4"}>
                            <li className={"mb-2"}>
                                Localizar na caixa do equipamento a capacidade já especificada.
                            </li>
                            <li className={"mb-2"}><img className={"inline-block"} src={"./box_example.jpg"}
                                                        alt={"Example image."} width={"500"}/></li>
                            <li className={"mb-2"}><span className={"font-semibold"}>Bitola da linha</span> = 0,32mm
                                / <span className={"font-semibold"}>Capacidade</span> = 135m
                            </li>
                            <li className={"mb-2"}>Preencher os valores e clicar no botão <span
                                className={"font-semibold"}>Calcular</span>.
                            </li>
                        </ul>
                    </ExpandablePanel>
                    <form>
                        <div className={"flex flex-col gap-5 items-center"}>
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
                                className={"bg-slate-500 text-slate-100 pl-1 pr-1 pt-2 pb-2 w-40 self-center rounded-md shadow-md hover:bg-slate-600 active:bg-slate-700 font-medium"}
                                type={"button"}
                                onClick={calculate}>Calcular
                            </button>
                        </div>
                    </form>
                    {
                        lineCapacity.length > 0 &&
                        <>
                            <div className={"text-red-600 text-sm italic text-right"}>
                                * Os valores calculados são aproximados.
                            </div>
                            <Table items={lineCapacity}/>
                        </>
                    }
                </>
            </MainContent>
            <Footer/>
        </div>
    );
}

export default App;
