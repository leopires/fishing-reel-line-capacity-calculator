import './Footer.css';


function Footer() {
    return (
        <div
            className={"flex flex-row justify-center items-center gap-3 pl-5 pr-5 pt-3 pb-3 bg-slate-600 text-slate-200 sticky bottom-0 z-50"}> Leonardo
            Pires | <a href={"https://pireslabs.com"} target={"_blank"} >PiresLabs.com </a> | <a
                href={"https://github.com/leopires/fishing-reel-line-capacity-calculator"} target={"_blank"}>Código fonte</a></div>
    );
}

export default Footer;