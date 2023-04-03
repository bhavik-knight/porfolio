import "./Navbar.css";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BrightNess4Icon from "@mui/icons-material/Brightness4";
import BrightNess7Icon from "@mui/icons-material/Brightness7";
import Divider from "@mui/material/Divider";
import { AppBar, Box, Button, ButtonGroup, SvgIcon, Toolbar, ToggleButton } from '@mui/material';


function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function Navbar(props) {
    const controls = {
        color: "white",
        marginInline: 1,
        backgroundColor: "inherit",
        border: "2px solid white",
    }


    // reference for button-group-functionality:
    // https://dev.to/ramonak/react-how-to-create-a-custom-button-group-component-in-5-minutes-3lfd
    const [selectedButton, setSelectedButton] = useState(-1)

    function handleClick(event, i) {
        setSelectedButton(i)
        props.onClick(event)
    }

    // check the current dark mode value; change it on the button click and pass it to the parents
    // reference: https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react
    let currentDarkModeValue = props.currentDarkMode

    // this will be return to be rendered in Page
    return (
        <AppBar
            enableColorOnDark
            position="static"
            sx={{ backgroundColor: "blue" }}
        >
            <Toolbar sx={{ ...controls, m: 0 }} component="div">
                {/* 1. menu-button */}
                <Button
                    sx={{ ...controls }}
                    aria-label="menu"
                    onClick={() => console.log("menu is cliked")}
                >
                    <MenuIcon />
                </Button>

                {/* 3. pages */}
                <ButtonGroup
                    size={"large"}
                    orientation="horizontal"
                    sx={{ ...controls, flexGrow: 1 }}
                >
                    {
                        props.buttonList.map((button, index) => (
                            // console.log(`narvar-button: ${button}`)
                            <Button
                                key={index}
                                onClick={(event) => handleClick(event, index)}
                                name={button}
                                className={index === selectedButton ? "navbar.button:selected" : "navbar.button"}
                            >
                                {button}
                            </Button>
                        ))
                    }
                </ButtonGroup>

                {/* create a virual divider to push dark-theme icon to the right}
                    <Divider />

                    {/* 3. dark-theme */}
                <ToggleButton
                    disableTouchRipple
                    disableFocusRipple
                    disableRipple
                    value={currentDarkModeValue}
                    name="darkMode"
                    className="dark-mode ms-auto"
                    sx={{ ...controls, border: "none" }}
                    onChange={() => { props.setDarkMode(!currentDarkModeValue) }}
                >
                    {currentDarkModeValue ? <BrightNess7Icon /> : <BrightNess4Icon />}
                </ToggleButton>
            </Toolbar>
        </AppBar>
    );
}

export { Navbar };
