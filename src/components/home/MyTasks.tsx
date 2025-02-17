import React from 'react';
import Block from "../shared/Block.tsx";
import {ITask, useGoalsContext} from "../../state/GoalsContext.tsx";
import Task from "./Task.tsx";

type Props = {

}

const MyTasks: React.FC<Props> = ({}) => {
    const {goals} = useGoalsContext();

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
          {tasks.map((task, i) => (<Task task={task} key={'t' + i} />))}
      </Block>
  );
};

export default MyTasks;
