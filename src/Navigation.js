import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoLibraryOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { BiSolidHeartCircle } from "react-icons/bi";

export const nav = [
    {
        icon: <IoHomeOutline />,
        iconName: "Home",
        path:"/home",
        className:"navigation_links"
    },
    {
        icon: <IoSearch />,
        iconName: "Search",
        path:"/search",
        className:"navigation_links"
    },
    {
        icon: <IoLibraryOutline />,
        iconName: "library",
        path:"/library",
        className:"navigation_links"
    },

]

export const twoNav = [
    
        {
            icon: < CiSquarePlus/>,
            iconName: "Playlist",
            path:"/playlist"
        },
        {
            icon: < BiSolidHeartCircle/>,
            iconName: "Favourites",
            path:"/favourites"
        }, 
    
]


export const menuList = [
    {
        itemName:"Account"
    },
    {
        itemName:"Profile"
    },
    {
        itemName:"Support"
    },
    {
        itemName:"Download"
    },
    {
        itemName:"Log out"
    },


]