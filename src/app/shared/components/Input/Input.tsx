import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value:string | number;
    name:string;
    type:string;
}

const Input: FC<InputProps> = ( {value, name, type, max,...rest} : InputProps ) => {
    return (
        <input value={value} name={name} {...rest} type={type} max={max} className="form-control" />
    );
};

export default Input;
