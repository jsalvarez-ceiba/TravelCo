import React, { SelectHTMLAttributes, FC } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  data: any[];
}

interface Places {
    city: string;
    country: string;
    flag: string;
}

const Select: FC<SelectProps> = ({ name, data, title, ...rest }: SelectProps) => {
  data = [];
  return (
    <select name={name} {...rest} className="form-control">
      <option value="">Seleccionar {title} </option>
        {
            data.map((element : Places , index : number) => (
                <option key={index.toString()} value={element.city} > {element.city} </option>
            ))
        }
    </select>
  );
};
export default Select;
