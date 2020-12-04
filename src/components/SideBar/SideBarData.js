import React from "react";
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as BiIcon from "react-icons/bi"

export const SideBarData = [
    {
        name: "Home",
        path: "/",
        icon: <FaIcons.FaHome/>,
        styleClass: "nav-text"
    },
    {
        name: "New Note",
        path: "/newNote",
        icon: <FaIcons.FaRegStickyNote/>,
        styleClass: "nav-text"
    },
    {
        name: "View all Notes",
        path: "/allNotes",
        icon: <BiIcon.BiNotepad/>,
        styleClass: "nav-text"
    },
    {
        name: "About",
        path: "/about",
        icon: <AiIcons.AiFillInfoCircle/>,
        styleClass: "nav-text"
    },
    {
        name: "Tutorial",
        path: "/tutorial",
        icon: <AiIcons.AiFillQuestionCircle/>,
        styleClass: "nav-text"
    },
];