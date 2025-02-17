import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar.tsx";
import Header from "./Header.tsx";

type Props = {

}

const Layout: React.FC<Props> = ({}) => {
  return(
      <div>
          <div>
              <Sidebar/>
              <Header/>
          </div>
          <div className={'ml-[340px] mt-[52px] flex flex-1'}>
              <Outlet/>
          </div>
      </div>
  );
};

export default Layout;
