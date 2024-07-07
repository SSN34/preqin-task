import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { redirect } from "react-router-dom";

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
                        <TableRow hover style={{cursor: "pointer"}} key={firm.firm_id} onClick={() => {window.location = `/investor/${firm.firm_id}`}}>
                            <TableCell>{firm.firm_id}</TableCell>
                            <TableCell>{firm.firm_name}</TableCell>
                            <TableCell>{firm.firm_type}</TableCell>
                            <TableCell>{new Date(firm.date_added).toDateString()}</TableCell>
                            <TableCell>{firm.address}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default InvestorsTable;
