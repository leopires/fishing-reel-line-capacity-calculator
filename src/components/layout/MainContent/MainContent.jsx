import './MainContent.css';


function MainContent({children}) {
    return (
        <>
            <div className="container mx-auto flex flex-col gap-5 flex-grow">
                {children}
            </div>
        </>
    );
}

export default MainContent;