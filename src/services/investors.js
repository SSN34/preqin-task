import axios from "axios";

export async function getInvestors() {
    let response = await axios.get("http://localhost:8000/api/investors");

    let investors = response.data;

    return investors;
}

export async function getInvestorDetails(investorId) {
    try{
        let response = await axios.get(`http://localhost:8000/api/investor/${investorId}`);

        let investorDetails = response.data;
        return investorDetails;
    } catch (error) {
        return {status: "error", message: "investor not found!"}
    }

} 