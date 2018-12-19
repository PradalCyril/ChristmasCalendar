import React, {Component} from 'react';
import './index.css';

class Confpage extends Component{
    constructor(props){
        super(props)
        this.state ={
            showTextInfo: 'hidden'
        }
    }

    toggleInfo(){
        let css = (this.state.showTextInfo === 'hidden') ? 'show' : 'hidden';
        this.setState({showTextInfo:css});
    }

    render(){
        return(
            <div className='container'>
                <div className='text_info'>
                <p className={this.state.showTextInfo}>LIEN CALENDAR</p>
                </div>
                <button onClick={(ev) => this.toggleInfo(ev)}>Next</button>
            </div>
        )
    }
}

export default Confpage;