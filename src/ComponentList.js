import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import MaterialGrid from "./components/materialComponents/MaterialGrid";
import MaterialTextField from "./components/materialComponents/MaterialTextField";
import MaterialButton from "./components/materialComponents/MaterialButton";
import MaterialTypography from "./components/materialComponents/MaterialTypography";
import SlideshowIcon from '@material-ui/icons/Slideshow';
import MaterialCheckbox from "./components/materialComponents/MaterialCheckbox";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import MaterialPaper from "./components/materialComponents/MaterialPaper";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MaterialSelect from "./components/materialComponents/MaterialSelect";
import MenuIcon from '@material-ui/icons/Menu';
import TitleIcon from '@material-ui/icons/Title';
import MaterialCircularProgress from "./components/materialComponents/MaterialCircularProgress";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MaterialLinearProgress from "./components/materialComponents/MaterialLinearProgress";
import MaterialTable from "./components/materialComponents/MaterialTable";
import TableChartIcon from '@material-ui/icons/TableChart'
import MaterialMenu from "./components/materialComponents/MaterialMenu";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MaterialSlider from "./components/materialComponents/MaterialSlider";
import TuneIcon from '@material-ui/icons/Tune';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import MaterialIconButton from "./components/materialComponents/MaterialIconButton";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MaterialAppBar from "./components/materialComponents/MaterialAppBar";
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import TabIcon from '@material-ui/icons/Tab';
import MaterialTabs from "./components/materialComponents/MaterialTabs";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MaterialCard from "./components/materialComponents/MaterialCard";
import MaterialSwitch from "./components/materialComponents/MaterialSwitch";
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import MaterialDivider from "./components/materialComponents/MaterialDivider";
import RemoveIcon from '@material-ui/icons/Remove';
import MaterialTooltip from "./components/materialComponents/MaterialTooltip";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import MaterialContainer from "./components/materialComponents/MaterialContainer";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import MaterialLink from "./components/materialComponents/MaterialLink";
import LinkIcon from '@material-ui/icons/Link';
import MaterialDrawer from "./components/materialComponents/MaterialDrawer";
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
const components = [
    {name: 'Grid', comp:<MaterialGrid/>, icon: <DashboardIcon color='secondary'/>, type:'layout'},
    {name: 'Paper', comp:<MaterialPaper/>, icon:<InsertDriveFileIcon color='secondary'/>, type:'surface'},
    {name: 'TextField', comp:<MaterialTextField/>, icon:<TextFieldsIcon color='secondary'/>, type:'input'},
    {name: 'Checkbox', comp:<MaterialCheckbox/>, icon:<CheckBoxIcon color='secondary'/>, type:'input'},
    {name: 'Select', comp:<MaterialSelect/>, icon:<MenuOpenIcon color='secondary'/>, type:'input'},
    {name: 'Button', comp:<MaterialButton/>, icon:<SlideshowIcon color='secondary'/>, type:'input'},
    {name: 'Typography', comp:<MaterialTypography/>,icon:<TitleIcon color='secondary'/>, type:'data'},
    {name: 'Circular Progress', comp:<MaterialCircularProgress/>, icon:<DonutLargeIcon color='secondary'/>, type:'data'},
    {name: 'Linear Progress', comp:<MaterialLinearProgress/>, icon:<LinearScaleIcon color='secondary'/>, type: 'data'},
    {name: 'Table', comp:<MaterialTable/>, icon: <TableChartIcon color='secondary'/>, type:'data'},
    {name: 'Menu', comp:<MaterialMenu/>, icon: <MenuIcon color='secondary'/>, type:'navigation'},
    {name: 'Slider', comp:<MaterialSlider/>, icon: <TuneIcon color='secondary'/>, type:'input'},
    {name: 'Icon Button', comp:<MaterialIconButton/>, icon: <InsertEmoticonIcon color='secondary'/>, type:'data'},
    {name: 'AppBar', comp:<MaterialAppBar/>, icon:<HorizontalSplitIcon color='secondary'/>, type:'surface'},
    {name: 'Tabs', comp: <MaterialTabs/>, icon:<TabIcon color='secondary'/>, type:'navigation'},
    {name: 'Card', comp: <MaterialCard/>, icon:<CreditCardIcon color='secondary'/>, type:'surface'},
    {name: 'Switch', comp: <MaterialSwitch/>, icon: <SyncAltIcon color='secondary'/>, type: 'input'},
    {name: 'Divider', comp: <MaterialDivider/>, icon: <RemoveIcon color={"secondary"}/>, type: 'data'},
    {name: 'Tooltip', comp: <MaterialTooltip/>, icon: <LiveHelpIcon color={"secondary"}/>, type: 'data'},
    {name: 'Container', comp: <MaterialContainer/>, icon: <CheckBoxOutlineBlankIcon color='secondary'/>, type: 'layout'},
    {name: "Link", comp: <MaterialLink/>, icon: <LinkIcon color='secondary'/>, type: 'navigation'},
    {name: "Drawer", comp: <MaterialDrawer/>, icon: <VerticalSplitIcon color='secondary'/>, type: 'navigation'}
]

export default components