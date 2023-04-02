import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, ToggleButton, ToggleButtonGroup, Toolbar } from '@mui/material';

// reference: https://dev.to/ramonak/react-how-to-create-a-custom-button-group-component-in-5-minutes-3lfd

function ButtonAppBar(props) {
    const control = {
        color: "white",
        outline: "white",
        p: 2
    }

    return (
        <Box sx={{ flexGrow: 1, p: 0, m: 0 }} >
            <AppBar position="static" sx={{ bgcolor: "black" }}>
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
                    <ToggleButtonGroup
                        exclusive={true}
                        color={props.color}
                        size={props.size}
                        onChange={props.onChange}
                        value={props.value}
                    >
                        <ToggleButton sx={{ ...control }} value="home" name="home">Home/Logo</ToggleButton>
                        <ToggleButton sx={{ ...control }} value="projects" name="projects">projects</ToggleButton>
                        <ToggleButton sx={{ ...control }} value="certificates" name="certificates">certificates</ToggleButton>
                        <ToggleButton sx={{ ...control }} value="education" name="education">Education</ToggleButton>
                        <ToggleButton sx={{ ...control }} value="contactMe" name="contactMe">Contact Me</ToggleButton>
                    </ToggleButtonGroup>
                </Toolbar>
            </AppBar>
        </ Box >
    );
}

export { ButtonAppBar };
