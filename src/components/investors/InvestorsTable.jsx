import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function InvestorsTable({ allData }) {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Firm Id</TableCell>
                        <TableCell>Firm Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Date Added</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allData.map((firm) =>
                        <TableRow hover style={{ cursor: "pointer" }} key={firm.firm_id} onClick={() => { window.location = `/investors/${firm.firm_id}` }}>
                            <TableCell>{firm.firm_id}</TableCell>
                            <TableCell>{firm.firm_name}</TableCell>
                            <TableCell>{firm.firm_type.toUpperCase()}</TableCell>
                            <TableCell>{new Date(firm.date_added).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</TableCell>
                            <TableCell>{firm.address}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default InvestorsTable;
