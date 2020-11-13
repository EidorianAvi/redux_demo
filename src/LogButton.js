import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogButton extends Component {
  
    render(){
        
        const handleClick = () => {
            console.log(this.props);
        }
        
        return(
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        jedi: state.Jedi,
        sith: state.Sith
    }
}

export default connect(mapStateToProps)(LogButton);