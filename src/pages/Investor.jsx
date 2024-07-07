import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataUtility } from "../utility/fetchUtility";
import { getInvestorDetails } from "../services/investors";
import { Description, Title } from "../components/StyledComponents";
import { MenuItem, Select, Skeleton } from "@mui/material";
import InvestorDetails from "../components/InvestorDetails";
import { AssetClasses } from "../utility/constants";

function Investor() {

    const [investorData, setInvestorData] = useState({});
    const [assetClass, setAssetClass] = useState("")
    const [loading, setLoading] = useState(true);

    let { firmId } = useParams();

    useEffect(() => {
        fetchDataUtility(getInvestorDetails, setInvestorData, firmId);
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [investorData]);

    return (loading ? <Skeleton /> :
        <>
            <Title>
                {investorData.firm_name}
            </Title>
            <Description>

                <InvestorDetails investorData={investorData} />
            </Description>
            Select an Asset Class for more details:
            <Select
                id="asset-class-select"
                value={assetClass}
                label="Asset Class"
                style={{width: "200px"}}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {AssetClasses.map((assetClass, i) => {
                    <MenuItem key={i + assetClass.value} value={assetClass.value}>{assetClass.name}</MenuItem>
                })}
            </Select>
        </>
    );
}

export default Investor;