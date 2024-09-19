import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Website Name "autocis" */}
        <div className="logo">
          <a href="/" style={{ color: "darkblue", fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>
            AutoCIS
          </a>
        </div>

        <div className="items">
          {/* Search Bar */}
          

          {/* Dashboard Link */}
          <div className="item">
            <a href="/home" className="link">
              <DashboardOutlinedIcon className="icon" />
              Dashboard
            </a>
          </div>

          {/* Protocol Link */}
          <div className="item">
            <a href="/users" className="link">
              <ListOutlinedIcon className="icon" />
              Protocol
            </a>
          </div>

          {/* Settings Link */}
          <div className="item">
            <a href="/users/new" className="link">
              <SettingsOutlinedIcon className="icon" />
              Settings
            </a>
          </div>

          {/* Logout Link */}
          <div className="item">
            <a href="/" className="link">
              <ExitToAppOutlinedIcon className="icon" />
              Logout
            </a>
          </div>

          {/* Profile */}
         

          {/* Other Navbar Icons */}
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}

          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>

          {/* <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div> */}

          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

        
          <div className="item">
            <a href="/profile" className="link">
              
             
            </a>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Profile"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
