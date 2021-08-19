import React from 'react';

import s from './MyInput.module.css';

const MyInput = (props) => (
        <input className={s.myInput} {...props}/>
    );

export default MyInput;
