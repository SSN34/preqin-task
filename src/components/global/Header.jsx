import { ArrowBackIosRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

function Header() {

    const [hideBackButton, setHideBackButton] = useState(true)

    let currentPath = window.location.pathname;

    useEffect(() => {

        setHideBackButton(currentPath === "/");

        console.log(currentPath)

    }, [currentPath])


    return (
        <div id="title">
            {hideBackButton ? "" : <IconButton onClick={() => window.history.back()} style={{ width: "40px" }}>
                <ArrowBackIosRounded style={{ color: "white" }} />
            </IconButton>}
            <a href="/">PREQIN</a>
        </div>
    )
}

export default Header;