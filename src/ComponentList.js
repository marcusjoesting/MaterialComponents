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
const components = [
    {name: 'Grid', comp:<MaterialGrid/>, icon: <DashboardIcon color='secondary'/>},
    {name: 'Paper', comp:<MaterialPaper/>, icon:<InsertDriveFileIcon color='secondary'/>},
    {name: 'TextField', comp:<MaterialTextField/>, icon:<TextFieldsIcon color='secondary'/>},
    {name: 'Checkbox', comp:<MaterialCheckbox/>, icon:<CheckBoxIcon color='secondary'/>},
    {name: 'Select', comp:<MaterialSelect/>, icon:<MenuOpenIcon color='secondary'/>},
    {name: 'Button', comp:<MaterialButton/>, icon:<SlideshowIcon color='secondary'/>},
    {name: 'Typography', comp:<MaterialTypography/>,icon:<TitleIcon color='secondary'/>},
    {name: 'Circular Progress', comp:<MaterialCircularProgress/>, icon:<DonutLargeIcon color='secondary'/>},
    {name: 'Linear Progress', comp:<MaterialLinearProgress/>, icon:<LinearScaleIcon color='secondary'/>},
    {name: 'Table', comp:<MaterialTable/>, icon: <TableChartIcon color='secondary'/>},
    {name: 'Menu', comp:<MaterialMenu/>, icon: <MenuIcon color='secondary'/>},
    {name: 'Slider', comp:<MaterialSlider/>, icon: <TuneIcon color='secondary'/>},
    {name: 'Icon Button', comp:<MaterialIconButton/>, icon: <InsertEmoticonIcon color='secondary'/>},
    {name: 'AppBar', comp:<MaterialAppBar/>, icon:<HorizontalSplitIcon color='secondary'/>},
    {name: 'Tabs', comp: <MaterialTabs/>, icon:<TabIcon color='secondary'/>}
]

export default components