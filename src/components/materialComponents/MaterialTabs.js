import React, {useState} from 'react'
import ComponentView from "../ComponentView";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from '@material-ui/icons/Dashboard';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MenuIcon from '@material-ui/icons/Menu';
import TitleIcon from '@material-ui/icons/Title';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import TableChartIcon from '@material-ui/icons/TableChart'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import TuneIcon from '@material-ui/icons/Tune';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
const icons = [<DashboardIcon/>, <TextFieldsIcon/>, <SlideshowIcon/>, <CheckBoxIcon/>, <InsertDriveFileIcon/>,<MenuIcon/>,<TitleIcon/>,<DonutLargeIcon/>,<TableChartIcon/>,<MenuOpenIcon/>,<TuneIcon/>,<LinearScaleIcon/>]



const TabsComponent = props => {
    let tabs = {}

    tabs['disabled'] = props.fields[6].value
    tabs['disableFocusRipple'] = props.fields[7].value
    tabs['disableRipple'] = props.fields[8].value
    tabs['wrapped'] = props.fields[15].value
    return (
        <Tabs
            centered={props.fields[0].value}
            indicatorColor={props.fields[1].value}
            orientation={props.fields[2].value}
            scrollButtons={props.fields[3].value}
            textColor={props.fields[4].value}
            variant={props.fields[5].value}
        >
            <Tab icon={props.fields[9].value} label={props.fields[12].value} {...tabs}/>
            <Tab icon={props.fields[10].value} label={props.fields[13].value} {...tabs}/>
            <Tab icon={props.fields[11].value} label={props.fields[14].value} {...tabs} />
        </Tabs>
    )
}


export default function MaterialTabs(props) {
    const [fields, setFields] = useState([
        {name: 'centered', type: 'boolean', value: false},
        {name: 'indicatorColor', type: 'select', value: 'secondary', options:['primary', 'secondary']},
        {name: 'orientation', type: 'select', value: 'horizontal', options:['horizontal', 'vertical']},
        {name: 'scrollButtons', type: 'select', value: 'auto', options:['auto', 'desktop','on','off']},
        {name: 'textColor', type: 'select', value: 'inherit', options:['primary', 'secondary','inherit']},
        {name: 'variant', type: 'select', value: 'secondary', options:['standard', 'scrollable','fullWidth']},
        {name: 'disabled', type:'boolean',value: false},
        {name: 'disableFocusRipple', type: 'boolean', value: false},
        {name: 'disableRipple', type: 'boolean', value: false},
        {name: 'icon 1', type: 'select', value: <DashboardIcon/>, options: icons},
        {name: 'icon 2', type: 'select', value: <DashboardIcon/>, options: icons},
        {name: 'icon 3', type: 'select', value: <DashboardIcon/>, options: icons},
        {name: 'label 1', type: 'text', value: 'Label 1'},
        {name: 'label 2', type: 'text', value: 'Label 2'},
        {name: 'label 3', type: 'text', value: 'Label 3'},
        {name: 'wrapped', type: 'boolean', value: false}

    ])
    return(
        <>
            <ComponentView component={<TabsComponent fields={fields}/>} name={'Tabs'} fields={fields} setFields={setFields}/>
        </>
    )
}