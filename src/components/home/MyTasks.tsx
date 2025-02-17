import React from 'react';
import Block from "../shared/Block.tsx";
import {ITask, useGoalsContext} from "../../state/GoalsContext.tsx";

type Props = {

}

const MyTasks: React.FC<Props> = ({}) => {
    const {goals, completeTask} = useGoalsContext();

    const tasks = goals.reduce((arr: (ITask & {goalId: number})[], goal) => {
        const newTasks = goal.tasks.map((task) => ({
            ...task,
            goalId: goal.id,
        }))
        arr = arr.concat(newTasks);
        return arr;
    }, []);

  return(
      <Block title={'МОИ ЗАДАЧИ'} className={'w-[680px] h-[500px]'}>
          {tasks.map((task, i) => (<div className="flex flex-1 flex-row h-[92px] bg-primary px-3 justify-between items-center">
                          <div key={'t' + i} className="">
                              <p className={'text-dark text-[24px]'}>
                                  {task.name}
                              </p>
                              <p className={'text-key text-[20px]'}>
                                  {task.description}
                              </p>
                          </div>
                          {!task.isDone ? <div onClick={() => completeTask(task.goalId, task.id)} className={'rounded-full w-5 h-5 bg-white'}></div> : <div className={'w-10 h-2 bg-white'}></div>}
                      </div>))}
      </Block>
  );
};

export default MyTasks;
