import { useEffect, useState } from "react";
import { getInvestors } from "../services/investors";
import { fetchDataUtility } from "../utility/fetchUtility";

function InvestorsData() {

    const [investors, setInvestors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDataUtility(getInvestors,setInvestors);
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
