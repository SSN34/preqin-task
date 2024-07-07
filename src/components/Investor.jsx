import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInvestorDetails } from "../services/investors";
import { fetchDataUtility } from "../utility/fetchUtility";

function Investor(){
    
    const [investorData, setInvestorData] = useState({});
    const [loading, setLoading] = useState(true);

    let { firmId } = useParams();

    useEffect(() => {
        fetchDataUtility(getInvestorDetails, setInvestorData, firmId);
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [investorData]);

    return (
        <div>
            {JSON.stringify(investorData)}
        </div>
    );
}

export default Investor;