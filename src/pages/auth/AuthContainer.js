import React from 'react';
import {firestore} from "../../firebase";

export class Test extends React.Component{
    componentDidMount() {
        const p = firestore.collection('posts').get();
        console.log({p});
    }

    render() {
        return (
            <div>
                asas
            </div>
        );
    }
}
export default Test;
