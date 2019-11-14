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


const icons = [<DashboardIcon/>, <TextFieldsIcon/>, <SlideshowIcon/>, <CheckBoxIcon/>, <InsertDriveFileIcon/>,<MenuIcon/>,<TitleIcon/>,<DonutLargeIcon/>,<TableChartIcon/>,<MenuOpenIcon/>,<TuneIcon/>,<LinearScaleIcon/>]

const IconButtonComponent = props => {
    let iconProps = {}
    props.fields.forEach((field) => {
        if (field.name !== 'child') {
            iconProps[field.name] = field.value
        }
    })
    return (
        <div>
            <IconButton {...iconProps}>
                {props.fields[0].value}
            </IconButton>
        </div>
    )
}


export default function MaterialMenu(props) {
    const [fields, setFields] = useState([
        {name: 'child', type: 'select', value: <DashboardIcon/>, options: icons},
        {name: 'color', type: 'select', value: 'default', options:['default', 'inherit', 'primary', 'secondary']},
        {name: 'disabled', type: 'boolean', value: false},
        {name: 'disableFocusRipple', type: 'boolean', value: false},
        {name: 'disableRipple', type: 'boolean', value: false},
        {name: 'edge', type: 'select', value: 'start', options: ['start' , 'end', false]},
        {name: 'size', type: 'select', value: 'medium', options: ['small', 'medium']}

    ])
    return(
        <>
            <ComponentView component={<IconButtonComponent fields={fields}/>} name={'Icon Button'} fields={fields} setFields={setFields}/>
        </>
    )
}