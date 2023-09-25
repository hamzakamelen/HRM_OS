import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, MenuButton } from "@mui/material";
//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';


const drawerWidth = 250;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const Pages = [
    {
      name: "Dashboard",
      icon: <HomeOutlinedIcon />,
    },
    {
      name: "HR",
      icon: <PersonOutlineOutlinedIcon />,
      children: [
        {
          name: "New Employee",
          icon: <GroupOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Employee List",
          icon: <GroupOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Roll & Permissions",
          icon: <ManageAccountsOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Designation",
          icon: <ManageAccountsOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Department",
          icon: <ManageAccountsOutlinedIcon />,
          route: "abc"
        },
      ],
    },
    {
      name: "ATTENDANCE",
      icon: <AccessTimeOutlinedIcon />,
      children: [
        {
          name: "Attendance",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        },
        {
          name: "My Attendance",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        }
      ],
    },
    {
      name: "PAYROLL",
      icon: <AccountBalanceWalletOutlinedIcon />,
      children: [
        {
          name: "Calculate Payroll",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Payslip List",
          icon: <DescriptionOutlinedIcon />,
          route: "abc"
        }
      ],
    },
    {
      name: "SHIFT",
      icon: <AccessTimeOutlinedIcon />,
      children: [
        {
          name: "Shift",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        }
      ],
    },
    {
      name: "EMPLOYMENT",
      icon: <RocketOutlinedIcon />,
      children: [
        {
          name: "Status",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        },
      ],
    },
    {
      name: "LEAVE",
      icon: <PeopleAltOutlinedIcon />,
      children: [
        {
          name: "New Leave",
          icon: <ToggleOnOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Leave Status",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        },
        {
          name: "My Leave",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        },
      ],
    },
    {
      name: "HOLIDAY",
      icon: <CalendarTodayOutlinedIcon />,
      children: [
        {
          name: "Weekly Holiday",
          icon: <DonutSmallOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Public Holiday",
          icon: <DonutSmallOutlinedIcon />,
          route: "abc"
        }
      ],
    },
    {
      name: "LEAVE POLICY",
      icon: <CalendarTodayOutlinedIcon />,
      children: [
        {
          name: "Leave Policy",
          icon: <DonutSmallOutlinedIcon />,
          route: "abc"
        }
      ],
    },
    {
      name: "ANNOUNCEMENT",
      icon: <CampaignRoundedIcon />,
      children: [
        {
          name: "Announcement",
          icon: <EmojiFlagsOutlinedIcon />,
          route: "abc"
        }
      ],
    },
    {
      name: "ACCOUNTS",
      icon: <AccountBalanceWalletOutlinedIcon />,
      children: [
        {
          name: "Account",
          icon: <FormatListBulletedOutlinedIcon />,
          route: "abc"
        },
        {
          name: "New Transaction",
          icon: <DoneOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Transaction List",
          icon: <FormatListBulletedOutlinedIcon />,
          route: "abc"
        },
      ],
    },
    {
      name: "FINANCEREPORT",
      icon: <EmojiFlagsOutlinedIcon />,
      children: [
        {
          name: "Trail Balance",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Balance Sheet",
          icon: <DescriptionOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Income Statement",
          icon: <ArticleOutlinedIcon />,
          route: "abc"
        }
      ]
    },
    {
      name: "AWARDS",
      icon: <EmojiEventsRoundedIcon />,
      children: [
        {
          name: "New Award",
          icon: <EmojiEventsRoundedIcon />,
          route: "abc"
        },
        {
          name: "Award",
          icon: <EmojiEventsRoundedIcon />,
          route: "abc"
        }
      ],
    },
    {
      name: "PROJECT",
      icon: <SettingsOutlinedIcon />,
      children: [
        {
          name: "Add Project",
          icon: <SettingsOutlinedIcon />,
          route: "abc"
        },
        {
          name: "All Project",
          icon: <SettingsOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Team",
          icon: <SettingsOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Task Priority",
          icon: <SettingsOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Add Mileston",
          icon: <SettingsOutlinedIcon />,
          route: "abc"
        },
        {
          name: "Add Task Status",
          icon: <SettingsOutlinedIcon />,
          route: "abc"
        },
      ],
    },
    {
      name: "SETTING",
      icon: <SettingsOutlinedIcon />,
      children: [
        {
          name: "Company Settings",
          icon: <SettingsOutlinedIcon />,
          route: "abc"
        }
      ],
    }]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  }

  const drawer = (
    <div style={{ backgroundColor: '#344E66', color: '#d8d8d8', fontFamily: 'Poppins' }}>
      <List>
        <h1 style={{ textAlign: 'center', fontSize: 22, fontFamily: 'Poppins', fontWeight: 'normal' }}>HRM <span style={{ color: "yellowgreen" }}>OS</span> </h1>
        {Pages.map((x, i) => (
          <>
            <ListItem style={{ fontFamily: 'Poppins' }} key={x.name} disablePadding>
              <ListItemButton onClick={() => dropdown(i)}>
                <ListItemIcon style={{ color: '#d8d8d8' }}>
                  {x.icon}
                </ListItemIcon>
                <ListItemText className='drawertext' style={{ marginLeft: '-20px' }} primary={x.name} />
                {(x.children && Array.isArray(x.children)) && openDropdown !== i ? <KeyboardArrowDownIcon style={{ fontSize: 22 }} /> : ((openDropdown === i && openDropdown != 0) ? <KeyboardArrowUpIcon style={{ fontSize: 22 }} /> : null)}
              </ListItemButton>
            </ListItem>
            {openDropdown == i && Array.isArray(x.children) &&
              x.children.map((y, index) => (
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon style={{ color: '#d8d8d8', marginLeft: 22 }}>
                      {y.icon}
                    </ListItemIcon>
                    <ListItemText style={{ marginLeft: '-20px' }} primary={y.name} />
                  </ListItemButton>
                </ListItem>
              ))
            }
          </>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
