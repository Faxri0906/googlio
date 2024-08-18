import { Menu } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({openSidebar}) => {
  return (
    <Box 
    py={4}
    sx={{
        bgcolor: "primary.light",
        boxShadow: 24,
    }}>
        <Container maxWidth="xl">
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Typography color={"secondary.light"} fontSize={32} fontWeight={600}>
                    googlio.
                </Typography>
                <Stack direction={"row"} gap={4} alignItems={"center"} sx={
                    {
                        display: {
                            xs: 'none',
                            md: 'flex',
                        }
                    }
                }>
                    <Link to="/home">
                        <Typography color={"secondary.light"} fontSize={22} fontWeight={400}>
                            Home.
                        </Typography>
                    </Link>
                    <Link to="/about">
                        <Typography color={"secondary.light"} fontSize={22} fontWeight={400}>
                            About.
                        </Typography>
                    </Link>
                </Stack>
                <Button px={0} onClick={() => openSidebar()} sx={
                    {
                        display: {
                            xs: 'flex',
                            md: 'none',
                        }
                    }
                }>
                    <Menu sx={{color: "secondary.light"}}/>
                </Button>
            </Stack>
        </Container>
    </Box>
  );
};

export default Header;