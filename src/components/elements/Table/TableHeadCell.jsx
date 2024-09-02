function TableHeadCell({description}) {
    return (
        <th className={"border border-slate-300 bg-slate-500 p-4 text-slate-100"}>
            {description}
        </th>
    );
}

export default TableHeadCell;