import React, {ButtonHTMLAttributes} from 'react';

type Props = {title: string} & ButtonHTMLAttributes<any>;

const Button: React.FC<Props> = ({title, ...other}) => {
  return(
      <button className={'px-10 bg-black rounded-lg border-2 border-light text-white'} {...other}>{title}</button>
  );
};

export default Button;
