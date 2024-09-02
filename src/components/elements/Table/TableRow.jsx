function TableRow({cells}) {
    return (
        <>
            <tr className={"font-semibold"}>
                {cells}
            </tr>
        </>
    );
}

export default TableRow;