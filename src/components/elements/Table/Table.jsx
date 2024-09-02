import './Table.css';
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";
import TableRowCell from "./TableRowCell";


function Table({items}) {
    return (
        <table className={"table-auto border-collapse border border-slate-100 w-full"}>
            <thead>
            <tr>
                <TableHeadCell description={"Bitola da linha (mm)"}/>
                <TableHeadCell description={"Capacidade (m)"}/>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <TableRow cells={
                    [
                        <TableRowCell value={`${item.bitola}mm`}/>,
                        <TableRowCell value={`${item.capacidade}m`}/>]
                }>
                </TableRow>
            ))}
            </tbody>
        </table>
    );
}

export default Table;