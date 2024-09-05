function TableRow({children}) {
    return (
        <>
            <tr className={"font-semibold"}>
                {children}
            </tr>
        </>
    );
}

export default TableRow;