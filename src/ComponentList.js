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
import ColorPicker from "./components/ColorPicker";



const components = [
    {name: 'Grid', comp:<MaterialGrid/>, icon: <DashboardIcon/>},
    {name: 'Paper', comp:<MaterialPaper/>, icon:<InsertDriveFileIcon/>},
    {name: 'TextField', comp:<MaterialTextField/>, icon:<TextFieldsIcon/>},
    {name: 'Checkbox', comp:<MaterialCheckbox/>, icon:<CheckBoxIcon/>},
    {name: 'Select', comp:<MaterialSelect/>, icon:<MenuOpenIcon/>},
    {name: 'Button', comp:<MaterialButton/>, icon:<SlideshowIcon/>},
    {name: 'Typography', comp:<MaterialTypography/>,icon:<TitleIcon/>},
    {name: 'Circular Progress', comp:<MaterialCircularProgress/>, icon:<DonutLargeIcon/>},
    {name: 'Linear Progress', comp:<MaterialLinearProgress/>, icon:<LinearScaleIcon/>},
    {name: 'Table', comp:<MaterialTable/>, icon: <TableChartIcon/>},
    {name: 'Menu', comp:<MaterialMenu/>, icon: <MenuIcon/>},
    {name: 'Slider', comp:<MaterialSlider/>, icon: <TuneIcon/>},
]

export default components