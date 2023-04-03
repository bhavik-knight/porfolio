import { useState, } from "react";
import { Navbar } from "./Navbar.jsx";
import { Certificates } from "./Certificates";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { ContactMe } from "./ContactMe";
import { Box } from "@mui/material";


function Page(props) {
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

    console.log(`page: ${navbarTopic}`)
    const [pageBody, setPageBody] = useState(null)

    // return this to be rendered in the App
    return (
        // <Fragment>
        <Box sx={{ height: "100vh", width: "100vw", /*bgcolor: "pink"*/ }}>
            <Navbar
                buttonList={["home", "education", "projects", "certificates", "contact me"]}
                onClick={handleChange}
                currentDarkMode={props.currentDarkMode}
                setDarkMode={props.setDarkMode}
            />
            <h2>dark-mode: {JSON.stringify(props.currentDarkMode)}</h2>
            <h2>this is branch no-toggle of {navbarTopic}</h2>
            {
                (navbarTopic === "Home" && <h1> HOME PAGE</h1>) ||
                (navbarTopic === "Education" && <Education />) ||
                (navbarTopic === "Projects" && <Projects />) ||
                (navbarTopic === "Certificates" && <Certificates />) ||
                (navbarTopic === "Contact me" && <ContactMe />)
            }

        </Box >
        // </Fragment >
    )
}

export { Page };
