import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from "@material-ui/core/Tooltip";
import components from '../ComponentList'
import {makeStyles} from "@material-ui/core";

export default function LinkList(props) {
    return (
        <div>
            {components.map((component)=> {
                return (
                    <Tooltip placement='right' title={props.open ? '' : component.name}>
                    <ListItem button onClick={() => props.setContent(component.comp)}>
                        <ListItemIcon>
                            {component.icon}
                        </ListItemIcon>
                        <ListItemText primary={component.name}/>
                    </ListItem>
                    </Tooltip>
                )
            })}
        </div>
    );
}

