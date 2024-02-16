import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from "@mui/icons-material/Explore"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from "@mui/icons-material/ListAlt"
import GroupIcon from "@mui/icons-material/Group"
import VerifiedIcon from "@mui/icons-material/Verified"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';
export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/home"


    },
    {
        title:"Explore",
        icon:<ExploreIcon/>,
        path:"/Explore"


    },{
        title:"Notifications",
        icon:<NotificationsNoneIcon/>,
        path:"/Notification"


    },{
        title:"Messages",
        icon:<MessageIcon/>,
        path:"/Messages"


    },{
        title:"List",
        icon:<ListAltIcon/>,
        path:"/List"


    },
    {
        title:"Communities",
        icon:<GroupIcon/>,
        path:"/commnunities"


    },
    {
        title:"verifies",
        icon:<VerifiedIcon/>,
        path:"/verified"


    },
    {
        title:"More",
        icon:<PendingIcon/>,
        path:"/more"


    },
    {
        title:"Profile",
        icon:<AccountCircleIcon/>,
        path:"/Profile"


    },
]