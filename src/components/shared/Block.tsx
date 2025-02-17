import React from 'react';

type Props = {
    title: string;
    children: React.ReactNode;
    className: string;
}

const Block: React.FC<Props> = ({title, children, className}) => {
  return(
    <div className={`relative border-2 border-primary ${className}`}>
        <div className={'h-[50px] px-2 bg-primary inline-block'}>
            <p className={'text-[30px] text-dark font-bold'}>{title.toString().toUpperCase()}</p>
        </div>
        <div className="flex flex-1 px-8 py-10">
            {children}
        </div>
    </div>
  );
};

export default Block;
