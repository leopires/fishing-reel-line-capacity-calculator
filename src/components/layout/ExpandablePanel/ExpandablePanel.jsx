import {useState} from "react";

export default function ExpandablePanel({title, children}) {

    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className={"bg-slate-300 pl-3 pr-3 pt-2 pb-2 border border-slate-400 rounded-md"}>
                <div onClick={() => setExpanded(!expanded)} className={"flex flex-row text-slate-700 hover:cursor-pointer"}>
                    <div className={"flex-1"}>
                        <h3 className={'text-xl font-semibold'}>{title}</h3>
                    </div>
                    <div>
                        {!expanded ?
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
                <div className={expanded? 'block mt-3 text-sm md:text-md' : 'hidden'}>
                    {children}
                </div>
            </div>
        </>
    );
}