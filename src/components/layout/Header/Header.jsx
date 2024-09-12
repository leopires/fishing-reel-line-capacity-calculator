import './Header.css';


function Header() {
    return (
        <>
            <div
                className={"flex flex-row justify-center items-center gap-3 pl-5 pr-5 pt-3 pb-3 mb-3 bg-slate-800 text-slate-200 shadow-md"}>
                <img src={"./fishing.png"} alt="Fishing" className={"w-12"}/>
                <h3 className={"text-xl text-center md:text-3xl font-semibold"}>Calculadora de Capacidade de Linha -
                    Molinetes e Carretilhas</h3><span className={"text-sm self-end"}>v1.1.0</span>
            </div>
        </>
    );
}

export default Header;