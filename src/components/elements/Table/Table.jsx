import './Table.css';
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";
import TableRowCell from "./TableRowCell";


function Table({items}) {
    return (
        <table className={"table-auto border-collapse border border-slate-100 w-full mb-8"}>
            <thead>
            <tr>
                <TableHeadCell>
                    Bitola da linha (mm)
                </TableHeadCell>
                <TableHeadCell>
                    Capacidade (m)
                </TableHeadCell>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => (
                <TableRow>
                    <TableRowCell>
                        {`${item.bitola}mm`}
                    </TableRowCell>
                    <TableRowCell>
                        {`${item.capacidade}m`}
                    </TableRowCell>
                </TableRow>
            ))}
            </tbody>
        </table>
    );
}

export default Table;