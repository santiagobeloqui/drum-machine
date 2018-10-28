import React from 'react';
import {Pad} from './Pad';
import './PadsContainer.css';
import {sounds} from './sounds';

export class PadsContainer extends React.Component{
    render(){
        let pads = [];
        for(let sound of sounds){
            pads.push(<Pad sound={sound} key={sounds.indexOf(sound)} />)
        }
        return <div className='pads-container'>{pads}</div>;

    }
}