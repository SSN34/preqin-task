import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function InvestorAssetsDetails({ assetsData }) {

    return (
        <TableContainer style={{height: "400px", width: "50%"}}>
            <Table stickyHeader size="small" >
                <TableHead>
                    <TableRow>
                        <TableCell>Asset Id</TableCell>
                        <TableCell>Currency</TableCell>
                        <TableCell>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assetsData.map((asset) =>
                        <TableRow key={asset.id} >
                            <TableCell>{asset.id}</TableCell>
                            <TableCell>{asset.currency}</TableCell>
                            <TableCell>{asset.amount}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default InvestorAssetsDetails;