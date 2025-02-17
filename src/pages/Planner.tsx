import React from 'react';
import Block from "../components/shared/Block.tsx";

type Props = {

}

const Planner: React.FC<Props> = ({}) => {
  return(
    <div className={'mr-10 flex flex-1'}>
        <Block title={'МОИ ЦЕЛИ'} className={'flex flex-1 mr-10'}>
            <div>

            </div>
        </Block>
    </div>
  );
};

export default Planner;
