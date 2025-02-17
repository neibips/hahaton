import React from 'react';
import UserInfo from "./UserInfo.tsx";
import {useNavigate} from "react-router-dom";

type Props = {

}

const Sidebar: React.FC<Props> = ({}) => {
    const navigate = useNavigate();
  return(
    <div className={'mx-auto flex flex-col w-[340px] h-screen fixed left-0 top-0 border-r-6 border-primary'}>
      <div className="flex flex-1">
          <UserInfo />

      </div>
      <div className="h-[420px] py-6 px-2 w-full bg-primary justify-evenly flex-col flex">
        <p onClick={() => navigate('/')} className={'text-[40px] text-dark no-underline hover:underline font-bold'}>ГЛАВНАЯ</p>
        <p onClick={() => navigate('/courses')} className={'text-[40px] text-dark no-underline hover:underline font-bold'}>КУРСЫ</p>
        <p onClick={() => {}} className={'text-[40px] text-dark no-underline hover:underline font-bold'}>УСПЕВАЕМОСТЬ</p>
        <p onClick={() => navigate('/planner')} className={'text-[40px] text-dark no-underline hover:underline font-bold'}>ПЛАННЕР</p>
        <p onClick={() => {}} className={'text-[40px] text-dark no-underline hover:underline font-bold'}>КАРЬЕРА</p>
      </div>
    </div>
  );
};

export default Sidebar;
