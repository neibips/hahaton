import React from 'react';
import MyTasks from "../components/home/MyTasks.tsx";

type Props = {

}

const Home: React.FC<Props> = ({}) => {
  return(
      <div className={'p-10 items-start justify-start'}>
        <MyTasks />
      </div>
  );
};

export default Home;
