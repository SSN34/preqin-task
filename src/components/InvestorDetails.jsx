import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInvestorDetails } from "../services/investors";
import { fetchDataUtility } from "../utility/fetchUtility";

function InvestorDetails({ investorData }) {
    return (
        <>
            {investorData.firm_type?.toUpperCase()} | ${new Intl.NumberFormat().format(investorData.AUM)} | {investorData.city}
        </>
    )
}

export default InvestorDetails;