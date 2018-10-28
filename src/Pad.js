import React from 'react';
import './Pad.css';

export class Pad extends React.Component{
    constructor(props){
        super(props);
        this.play = this.play.bind(this);
        this.checkKey = this.checkKey.bind(this);
        this.state = {
            lastPressedKey:null,
            className: 'pad'
        }
    }

    componentDidUpdate(){
        if(this.state.className == 'play'){
            setTimeout(()=>{
                this.setState({className: 'pad'});
            }, 200);
        }
    }

    componentDidMount(){
        window.addEventListener('keydown', this.checkKey);
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.checkKey);
    }


    play(){
        let audio = new Audio(this.props.sound.sound);
        audio.play();
        this.setState({className: 'play'}); 
    }

    checkKey(event){
        if(event.key === this.props.sound.keyName.toLowerCase()){
            this.setState({ lastPressedKey: event.key }); 
            this.play();
        } 
    }
    render(){
        return (
        <div className={this.state.className} onClick={this.play} onKeyPress={this.checkKey}>
        <p className="letter">{this.props.sound.keyName}</p>
        <p className="instrument-name">{this.props.sound.name}</p>
        </div>
        );
    }
}