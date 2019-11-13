import React, {useState} from 'react'
import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles} from '@material-ui/core/styles'
import ComponentView from "../ComponentView";





const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2)
    },
}))
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



const TableComponent = props => {
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    const classes = useStyles()
    return(
        <Table padding={props.fields[5].value} size={props.fields[6].value} stickyHeader={props.fields[7].value} aria-label='Material Table'>
            <TableHead>
                <TableRow hover={props.fields[8].value} selected={props.fields[9].value}>
                    <TableCell>{props.fields[0].value}</TableCell>
                    <TableCell align={props.fields[10].value} padding={props.fields[11].value} size={props.fields[12].value} variant={props.fields[13].value}>{props.fields[1].value}</TableCell>
                    <TableCell align={props.fields[10].value} padding={props.fields[11].value} size={props.fields[12].value} variant={props.fields[13].value}>{props.fields[2].value}</TableCell>
                    <TableCell align={props.fields[10].value} padding={props.fields[11].value} size={props.fields[12].value} variant={props.fields[13].value}>{props.fields[3].value}</TableCell>
                    <TableCell align={props.fields[10].value} padding={props.fields[11].value} size={props.fields[12].value} variant={props.fields[13].value}>{props.fields[4].value}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name} hover={props.fields[8].value} selected={props.fields[9].value}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align={props.fields[10].value} padding={props.fields[11].value} size={props.fields[12].value} variant={props.fields[13].value}>{row.calories}</TableCell>
                        <TableCell align={props.fields[10].value} padding={props.fields[11].value} size={props.fields[12].value} variant={props.fields[13].value}>{row.fat}</TableCell>
                        <TableCell align={props.fields[10].value} padding={props.fields[11].value} size={props.fields[12].value} variant={props.fields[13].value}>{row.carbs}</TableCell>
                        <TableCell align={props.fields[10].value} padding={props.fields[11].value} size={props.fields[12].value} variant={props.fields[13].value}>{row.protein}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}


export default function MaterialTable(props) {
    const [fields, setFields] = useState([
        {name: 'Header 1', type:'text', value:'Dessert (100g serving)'},
        {name: 'Header 2', type:'text', value:'Calories'},
        {name: 'Header 3', type:'text', value:'Fat (g)'},
        {name: 'Header 4', type:'text', value:'Carbs (g)'},
        {name: 'Header 5', type:'text', value:'Protein (g)'},
        {name: 'padding', type:'select', value:'default', options:['default','checkbox','none']},
        {name: 'size', type: 'select', value:'medium', options:['small','medium']},
        {name: 'stickyHeader', type: 'boolean', value:false},
        {name: 'rowHover (for all rows)', type: 'boolean', value: false},
        {name: 'rowSelected (for all rows)', type: 'boolean', value: false},
        {name: 'align (for all cells)', type: 'select', value: 'inherit', options: ['inherit', 'left','center','right','justify']},
        {name: 'padding (for all cells)', type: 'select', value: 'default', options: ['default', 'checkbox','none']},
        {name: 'size (for all cells)', type: 'select', value:'medium', options:['small','medium']},
        {name: 'variant', type: 'select', value:null, options:['','head','body', 'footer']}

    ])
    return(
        <>
            <ComponentView component={<TableComponent fields={fields}/>} name={'Table'} fields={fields} setFields={setFields}/>
        </>
    )
}