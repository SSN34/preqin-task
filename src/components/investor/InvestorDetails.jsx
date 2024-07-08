
function InvestorDetails({ investorData }) {
    return (
        <>
            {investorData.firm_type?.toUpperCase()} | ${new Intl.NumberFormat().format(investorData.AUM)} | {investorData.city}
        </>
    )
}

export default InvestorDetails;