import './Footer.css';


function Footer() {
    return (
        <div
            className={"flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3 pl-5 pr-5 pt-3 pb-3 bg-slate-600 text-slate-200 text-sm text-md sticky bottom-0 z-50"}><span>Leonardo
            Pires</span><span className={"hidden md:inline"}>|</span><a href={"https://pireslabs.com"} target={"_blank"} >PiresLabs.com </a><span className={"hidden md:inline"}>|</span><a
                href={"https://github.com/leopires/fishing-reel-line-capacity-calculator"} target={"_blank"}>Código fonte</a></div>
    );
}

export default Footer;