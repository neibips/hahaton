import React from 'react';
import {useLocation} from "react-router-dom";

type Props = {

}

const tt = {
    '/planner': 'Планнер',
    '/courses': 'Курсы',
    '/': 'Главная',
}
const Header: React.FC<Props> = ({}) => {
    const {pathname} = useLocation();
  return(
      <div className={'h-[52px] w-screen fixed left-[340px] top-0 flex'}>
        <div className="w-3/8 bg-primary h-full px-2 flex justify-end">
          <p onClick={() => {
          }} className={'text-[40px] text-dark no-underline hover:underline font-bold'}>КАБИНЕТ МАГИСТРАНТА</p>
        </div>
        <div className="w-3/7 h-full px-2">
          <p onClick={() => {
          }} className={'text-[40px] text-dark no-underline hover:underline font-bold'}>| {tt[pathname]}</p>
        </div>
      </div>
  );
};

export default Header;
