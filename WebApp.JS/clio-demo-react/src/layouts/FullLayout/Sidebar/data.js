import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import SwitchCameraOutlinedIcon from '@mui/icons-material/SwitchCameraOutlined';
import SwitchLeftOutlinedIcon from '@mui/icons-material/SwitchLeftOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlinedIcon,
    href: "/dashboards/dashboard1",
  },
  {
    title: "Orders",
    icon: DescriptionOutlinedIcon,
    href: "/form-elements/orders",
  },
  {
    title: "Customers",
    icon: ShoppingCartIcon,
    href: "/form-elements/customer",
  },
  {
    title: "Suppliers",
    icon: DirectionsBoatIcon, 
    href: "/form-elements/supplier",
  },
  {
    title: "Products",
    icon: ViewInArIcon, 
    href: "/form-elements/product",
  },
  {
    title: "Employees",
    icon: PersonAddAlt1Icon,
    href: "/form-elements/employee",
  },
];

export default Menuitems;
