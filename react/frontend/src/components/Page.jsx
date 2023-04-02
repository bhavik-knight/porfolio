import { Fragment, useState, useEffect } from "react";
import { ButtonAppBar } from "./Navbar.jsx";
import { Certificates } from "./Certificates";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { ContactMe } from "./ContactMe";
import { Box } from "@mui/material";


function Page() {
    // to check only one topic out of projects, education, certifications, etc
    const [navbarTopic, setNavbarTopic] = useState("home")

    function handleChange(event) {
        // console.log(`${typeof (newNavbarTopic)}: ${newNavbarTopic}, ${typeof (navbarTopic)}`)
        let pageName = event.target.name[0].toUpperCase() + event.target.name.substr(1)
        // console.log(`from navbar: ${pageName}`)
        setNavbarTopic(pageName)

        // to set the title bar according to the button clicks
        document.title = `Bhavik | ${pageName}`
    }

    return (
        <Fragment>
            <Box sx={{ bgcolor: "pink", height: "100vh", width: "100vw" }}>
                <ButtonAppBar
                    variant="outlined"
                    size="large"
                    buttonList={["home/logo", "education", "projects", "certificates", "contact me"]}
                    onClick={handleChange}
                />

                <h2>this is branch no-toggle of {navbarTopic}</h2>
            </Box>
        </Fragment >
    )
}

export { Page };
