import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { AssetClasses } from "../utility/constants"
import { Description } from "./StyledComponents"
import { useState } from "react"


function SelectAssetClass({setAssetClass}) {

    function handleChange(event){
        setAssetClass(event.target.value);
    }

    return (
        <>
            <Description>
                Select an Asset Class for more details:
            </Description>
            <FormControl sx={{ minWidth: 240 }} size="small">
                <InputLabel id="asset-class-label">Asset Class</InputLabel>
                <Select
                    labelId="asset-class-label"
                    id="asset-class-select"
                    label="Asset Class"
                    defaultValue={""}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {AssetClasses.map((aClass, i) =>
                        <MenuItem key={i + aClass.value} value={aClass.value}>{aClass.name}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </>
    )
}

export default SelectAssetClass;