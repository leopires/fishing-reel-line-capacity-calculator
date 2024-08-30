import './MainContent.css';


function MainContent({children}) {
    return (
        <>
            <div className="container mx-auto flex-grow">
                {children}
            </div>
        </>
    );
}

export default MainContent;