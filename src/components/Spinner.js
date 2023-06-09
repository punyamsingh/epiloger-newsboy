import React,{ Component } from 'react';
import Rhombus from './Rhombus.gif';

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Rhombus} alt="loading" />
            </div>
        );
    }
}

export default Spinner;
