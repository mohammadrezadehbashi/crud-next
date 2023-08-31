import { AppBar, Box, List, ListItemButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";


const MENU_ITEM = [
    {
      title: 'صفحه اصلی',
      link: '/'
    }, {
      title: 'درباره ما',
      link: '/about'
    }]

function Navbar(props) {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{justifyContent:"space-between"}}>
        {/* <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> */}
        <Typography variant="h6">Crud.net</Typography>
  
        <List sx={{display:"flex"}}>
          {MENU_ITEM.map(item => (
            <Link style={{textDecoration:"none",color:"inherit"}} key={item.title} href={item.link}>
              <ListItemButton >
                {item.title}
              </ListItemButton>
            </Link >
          )
          )}
        </List>
        {/* </Box> */}
        </Toolbar>
      </AppBar>
    );
}

export default Navbar;

