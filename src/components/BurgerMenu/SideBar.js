import React, {useState} from "react";
import {Link} from "react-router-dom"
import * as GoIcons from "react-icons/go"
import * as GrIcons from "react-icons/gr"
import {SideBarData} from "./SideBarData";
import "./SideBar.css"
import {IconContext} from "react-icons";

function SideBar() {
    const [sidebarActive, setSideBarActive] = useState(false);

    const toggleSideBar = () => {
        setSideBarActive(!sidebarActive);
    };

    return (
        <IconContext.Provider value={{color: "#293441"}}>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    <GoIcons.GoThreeBars onClick={toggleSideBar}/>
                </Link>
            </div>
            <nav className={sidebarActive ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-exit">
                            <GrIcons.GrFormClose onClick={toggleSideBar}/>
                        </Link>
                    </li>
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