import React, {useState, useEffect} from 'react'
import ComponentView from "../ComponentView";
import Container from "@material-ui/core/Container";

function ContainerComponent() {
    return (<>
            <Container style={{border: '1px solid black'}}>
                <div style={{height: 500}}>
                    CONTAINER
                </div>
            </Container>
        </>
    )
}

export default function MaterialContainer(props) {
    const [fields, setFields] = useState([
        {name: 'fixed', type: 'boolean', value:false},
        {name: 'maxWidth', type: 'select', value:'lg', options: ['xs','sm','md','lg','xl']}
    ])
    return (<>
            <ComponentView fields={fields} setFields={setFields} name="Container" component={<ContainerComponent fields={fields}/>}/>
        </>
    )
}