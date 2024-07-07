import axios from "axios";

export async function getAssetDetails({ firmId, assetClass }) {
    let response = await axios.get(`http://localhost:8000/api/investor/commitment/${assetClass}/${firmId}`);

    let investors = response.data;

    return investors;
}