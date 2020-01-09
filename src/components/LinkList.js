import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from "@material-ui/core/Tooltip";
import components from '../ComponentList'
import {makeStyles, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import _ from 'lodash'
import ListSubheader from "@material-ui/core/ListSubheader";
import Home from "./Home";
import HomeIcon from '@material-ui/icons/Home'

const layouts = _.sortBy(_.filter(components, (comp) => {
    return comp.type === 'layout'
}), comp => comp.name)

const inputs = _.sortBy(_.filter(components, (comp) => {
    return comp.type === 'input'
}), comp => comp.name)

const surfaces = _.sortBy(_.filter(components, (comp) => {
    return comp.type === 'surface'
}), comp => comp.name)

const datas = _.sortBy(_.filter(components, (comp) => {
    return comp.type === 'data'
}), (comp)=> comp.name)

const navigations = _.sortBy(_.filter(components, (comp) => {
    return comp.type === 'navigation'
}), (comp) => comp.name)



const layout = {name: 'Layouts', arr: layouts}
const input = {name: 'Inputs', arr: inputs}
const surface = {name: 'Surfaces', arr: surfaces}
const data = {name: 'Data Display', arr: datas}
const navigation = {name: 'Navigation', arr: navigations}

const list = [layout, input, surface, data, navigation]


export default function LinkList(props) {
    return (
        <div>
            <Tooltip placement='right' title={props.open ? '' : 'Home'}>
                <ListItem button onClick={() => props.setContent(<Home/>)}>
                    <ListItemIcon>
                        <HomeIcon color='secondary'/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography color='secondary'
                                                       variant='body1'>Home</Typography>}/>
                </ListItem>
            </Tooltip>
            <Divider/>
            {list.map((item) => {
                return(<>
                    <ListSubheader key={item.name}>{item.name}</ListSubheader>
                    {item.arr.map((comp) => {
                        return (<>
                            <Tooltip key={comp.name} placement='right' title={props.open ? '' : comp.name}>
                                <ListItem button onClick={() => props.setContent(comp.comp)}>
                                    <ListItemIcon>
                                        {comp.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={<Typography color='secondary'
                                                                       variant='body1'>{comp.name}</Typography>}/>
                                </ListItem>
                            </Tooltip>
                            <Divider/>
                        </>)
                    })
                    }
                    </>)
            })}
        </div>

    );
}

