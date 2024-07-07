import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInvestorDetails } from "../services/investors";

function Investor(){
    
    const [investorData, setInvestorData] = useState({});
    const [loading, setLoading] = useState(true);

    let { firmId } = useParams();

    useEffect(() => {

        getInvestorDetails(firmId).then((investor) => {
            setInvestorData(investor);
        });

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