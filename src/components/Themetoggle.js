import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import{switchColor} from './features/theme';
import './Themetoggle.css';

function Themetoggle() {

        const [color, setcolor]= useState('');
        const dispatch = useDispatch();
    return (
        <div>
            <input  className="input__box" type="text" placeholder="Enter color"
            onChange={(event) =>{
                setcolor(event.target.value);
            }}
            />
            <button className="input__button" onClick = {() => { dispatch(switchColor(color));
                }}>Switch theme </button>
        </div>
    )
}

export default Themetoggle
