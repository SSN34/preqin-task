import { useEffect, useState } from "react";
import { getInvestors } from "../services/investors";
import { fetchDataUtility } from "../utility/fetchUtility";
import InvestorsTable from "../components/investors/InvestorsTable";
import { CenteredDiv, Description, Title } from "../components/global/StyledComponents";
import { CircularProgress, Divider } from "@mui/material";

function Investors() {
    const [investors, setInvestors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDataUtility(getInvestors, setInvestors);
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [investors]);

    return (
        <>
            <Title>
                All Investors Dashboard
            </Title>
            <Description>
                An investor is any person who commits capital with the expectation of financial returns. This can include individuals, organizations, or institutions that invest in various assets, such as stocks, bonds, commodities, and mutual funds.
            </Description>
            <Divider />
            {loading ? <CenteredDiv><CircularProgress /></CenteredDiv> : <InvestorsTable allData={investors} />}
        </>
    )
}

export default Investors;