import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, ButtonBase, Divider, Stack } from "@mui/material";
import Typography from '@mui/material/Typography';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Footer = () => {
  return (
    <Stack>
    <Box bgcolor={"#f1f1f1"}>
    <Box  sx={{ width: "80%",  margin:"auto"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={3}>
          <Stack spacing={3}>
            <ButtonBase onClick={() => {}}>
              <img src="https://cherryblossom-books.com/wp-content/uploads/2022/10/logo-2.png" alt="Logo"  width={274} height={106} />
            </ButtonBase>

            <Stack direction={"row"} alignItems="center" spacing={1}>
                <LocationPinIcon fontSize="small" sx={{ color: "text.secondary"}}></LocationPinIcon>
                <Typography variant="subtitle2" sx={{ color: "text.secondary"}}>
                    Group 106, Building 15, Apartment 13, First Floor - El Rehab City 11841, New Cairo, Egypt
                </Typography>
            </Stack>

            <Stack direction={"row"} alignItems="center" spacing={1}>
                <PhoneIcon fontSize="small" sx={{ color: "text.secondary"}}></PhoneIcon>
                <Typography variant="subtitle2" sx={{ color: "text.secondary"}}>
                    02 269 4 999 0
                </Typography>
            </Stack>

            <Stack direction={"row"} alignItems="center" spacing={1}>
                <MailIcon fontSize="small" sx={{ color: "text.secondary"}}></MailIcon>
                <Typography variant="subtitle2"sx={{ color: "text.secondary"}}>
                    info@cherryblossom-books.com
                </Typography>
            </Stack>

            <Stack direction={"row"} alignItems="center" spacing={1}>
                <LanguageIcon fontSize="small" sx={{ color: "text.secondary"}}></LanguageIcon>
                <Typography variant="subtitle2" sx={{ color: "text.secondary"}}>
                    www.cherryblossom-books.com
                </Typography>
            </Stack>

          </Stack>
        </Grid>


        <Grid size={3}>
            <Stack spacing={3}>
                <Typography variant="overline" fontSize={"16px"}  sx={{ color: "text.secondary" }} >useful links</Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    About us
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    Contact Us
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    Privacy Policy
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    Delivery & Shipping
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    Returns
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    Loyalty Points
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    FAQs
                </Typography>
            </Stack>
        </Grid>


        <Grid size={3}>
            <Stack spacing={3}>
                <Typography variant="overline" fontSize={"16px"}  sx={{ color: "text.secondary" }} >Shop By Category</Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    Arabic Books
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    English Books
                </Typography>
                <Typography variant="body2" component="a" href="#" sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "text.primary" }, }}>
                    Bookish Items
                </Typography>
                
            </Stack>
        </Grid>



        <Grid size={3}>
          <Stack spacing={8} paddingTop={"60px"} divider={<Divider  sx={{backgroundColor:"gray"}} ></Divider>}>
            <Button component={Link} to='/contactus'  sx={{backgroundColor:"rgb(254,186,193)", width:"150px"}} variant="contained">CONTACT US</Button>
            <Stack direction={"row"} spacing={1}>
                <IconButton sx={{ color: "text.primary" ,backgroundColor:"rgb(254,186,193)"}}>
                    <TwitterIcon fontSize="medium" sx={{ color: "text.primary"}}></TwitterIcon>
                </IconButton>
                <IconButton sx={{ color: "text.primary" ,backgroundColor:"rgb(254,186,193)"}}>
                    <FacebookOutlinedIcon fontSize="medium" ></FacebookOutlinedIcon>
                </IconButton>
                <IconButton sx={{ color: "text.primary" ,backgroundColor:"rgb(254,186,193)"}}>
                    <InstagramIcon fontSize="medium" sx={{ color: "text.primary" ,backgroundColor:"rgb(254,186,193)"}}></InstagramIcon>
                </IconButton>
                <IconButton sx={{ color: "text.primary" ,backgroundColor:"rgb(254,186,193)"}}>
                    <LinkedInIcon fontSize="medium" sx={{ color: "text.primary" ,backgroundColor:"rgb(254,186,193)"}}></LinkedInIcon>
                </IconButton>
                
            </Stack>
          </Stack>
        </Grid>


      </Grid>
    </Box>
    </Box>
    <Box
      sx={{
        bgcolor: "rgb(254,186,193)",           
        color: "black",             
        textAlign: "center",       
        py: 2,                                       
      }}
    >
      <Typography variant="subtitle2" color= "text.secondary">
        Copyright {" "}
        <Link href="#" color="inherit" sx={{ color: "text.primary", textDecoration: "none"}}>
          cherryblossom-books.com
        </Link>{" "}
        <CopyrightIcon fontSize="small" sx={{ verticalAlign: "middle", mb: "2px" }}></CopyrightIcon> 2022. All Rights Reserved. Site Designed By{" "} EgyGo.net for {" "}
        <Link href="#" color="inherit" sx={{ color: "text.primary", textDecoration: "none"}}>
          web design Egypt
        </Link>{" "}
          PREMIUM E-COMMERCE SOLUTIONS.
      </Typography>
    </Box>
    </Stack>
    
  );
};

export default Footer;
