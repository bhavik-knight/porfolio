import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Button, ButtonGroup, Toolbar } from '@mui/material';

// reference: https://dev.to/ramonak/react-how-to-create-a-custom-button-group-component-in-5-minutes-3lfd

function ButtonAppBar(props) {
    const control = {
        color: "white",
        border: "1px solid white",
    }

    const [selectedButton, setSelectedButton] = useState(-1)

    function handleClick(event, i) {
        setSelectedButton(i)
        props.onClick(event)
    }

    return (
        <Box sx={{ flexGrow: 1, p: 0, m: 0 }} >
            <AppBar position="static" sx={{ bgcolor: "black" /*transaparent*/ }}>
                <Toolbar sx={{ display: "flexbox" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => console.log("menu is cliked")}
                    >
                        <MenuIcon />
                    </IconButton>

                    <ButtonGroup
                        variant={props.variant}
                        size={props.size}
                    >
                        {
                            props.buttonList.map((button, index) => (
                                // console.log(`narvar-button: ${button}`)
                                <Button
                                    key={index}
                                    onClick={(event) => handleClick(event, index)}
                                    name={button}
                                    className={index === selectedButton ? "navbar.button:selected" : "navbar.button"}
                                    sx={{ ...control }}
                                >
                                    {button}
                                </Button>
                            ))
                        }

                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </ Box >
    );
}

export { ButtonAppBar };
