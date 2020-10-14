import React from "react";
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"

export const SideBarData = [
    {
        name: "Home",
        path: "/",
        icon: <FaIcons.FaHome/>,
        styleClass: "nav-text"
    },
    {
        name: "Tutorial",
        path: "/tutorial",
        icon: <FaIcons.FaStickyNote/>,
        styleClass: "nav-text"
    },
    {
        name: "About",
        path: "/about",
        icon: <AiIcons.AiFillInfoCircle/>,
        styleClass: "nav-text"
    },
];