import React from 'react';
import {ITask, useGoalsContext} from "../../state/GoalsContext.tsx";

type Props = {
  task: ITask & {goalId: number};

}

const Task: React.FC<Props> = ({task}) => {
    const {completeTask} = useGoalsContext();
  return (
      <div className="flex flex-1 flex-row h-[92px] bg-primary px-3 justify-between items-center">
          <div className="">
              <p className={'text-dark text-[24px]'}>
                  {task.name}
              </p>
              <p className={'text-key text-[20px]'}>
                  {task.description}
              </p>
          </div>
          {!task.isDone ? <div onClick={() => completeTask(task.goalId, task.id)}
                               className={'rounded-full w-5 h-5 bg-white'}></div> :
              <div className={'w-10 h-2 bg-white'}></div>}
      </div>
  );
};

export default Task;
