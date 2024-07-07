import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataUtility } from "../utility/fetchUtility";
import { getInvestorDetails } from "../services/investors";
import { Description, Title } from "../components/StyledComponents";
import { Skeleton } from "@mui/material";
import InvestorDetails from "../components/InvestorDetails";
import SelectAssetClass from "../components/selectAssetClass";
import { getAssetDetails } from "../services/assestClasses";
import InvestorAssetsDetails from "../components/InvestorAssetsDetails";

function Investor() {

    const [investorData, setInvestorData] = useState({});
    const [assetClass, setAssetClass] = useState("")
    const [assetsData, setAssetsData] = useState([]);
    const [loading, setLoading] = useState(true);

    let { firmId } = useParams();

    useEffect(() => {
        fetchDataUtility(getInvestorDetails, setInvestorData, firmId);
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [investorData]);

    useEffect(() => {
        if(assetClass !== ""){
            fetchDataUtility(getAssetDetails, setAssetsData, {firmId, assetClass});
        }
    }, [assetClass]);

    return (loading ? <Skeleton /> :
        <>
            <Title>
                {investorData.firm_name}
            </Title>
            <Description>

                <InvestorDetails investorData={investorData} />
            </Description>
            <SelectAssetClass setAssetClass={setAssetClass}/>
            <InvestorAssetsDetails assetsData={assetsData}/>
        </>
    );
}

export default Investor;