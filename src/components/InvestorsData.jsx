import { useEffect, useState } from "react";
import { getInvestors } from "../services/investors";

function InvestorsData() {

    const [investors, setInvestors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getInvestors().then((investorData) => {
            setInvestors(investorData);
        })

    }, []);

    useEffect(() => {
        setLoading(false);
    }, [investors]);

    return (
        loading ? "Loading Data..." : <div>
            The investors Data are present here
            {JSON.stringify(investors)}
        </div>
    )
}

export default InvestorsData;
