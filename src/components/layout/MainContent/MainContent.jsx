import './MainContent.css';


function MainContent({children}) {
    return (
        <>
            <div className="container mx-auto flex flex-col gap-5 flex-grow  pl-3 pr-3">
                {children}
            </div>
        </>
    );
}

export default MainContent;