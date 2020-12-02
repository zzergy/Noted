import React, {useState} from "react";
import {Link} from "react-router-dom"
import * as GoIcons from "react-icons/go"
import * as GrIcons from "react-icons/gr"
import {SideBarData} from "./SideBarData";
import "./SideBar.css"
import {IconContext} from "react-icons";
import Logo from "../Logo.js"
function SideBar() {
    const [sidebarActive, setSideBarActive] = useState(false);

    const toggleSideBar = () => {
        setSideBarActive(!sidebarActive);
    };

    return (
        <IconContext.Provider value={{color: "#5293FB", size: "22px"}}>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    {/*Triggers the side bar to open*/}
                    <GoIcons.GoThreeBars onClick={toggleSideBar} size="24px"/>
                </Link>
                <Logo/>
            </div>

            <nav className={sidebarActive ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        {/*X button*/}
                        <Link to="#" className="menu-exit">
                            <GrIcons.GrFormClose onClick={toggleSideBar} size="29px"/>
                        </Link>
                    </li>

                    {/*Loading the navigation bar items from SideBarData*/}
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.styleClass}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    );
}

export default SideBar