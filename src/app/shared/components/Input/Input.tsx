import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value:string | number;
    name:string;
    type:string;
}

const Input: FC<InputProps> = ( {value, name, type, ...rest} : InputProps ) => {
    return (
        <input value={value} name={name} {...rest} type={type} className="form-control" />
    );
};

export default Input;
