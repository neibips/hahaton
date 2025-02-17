import React, {createContext, useContext, useState} from 'react';

export type ITask = {
    id: number;
    name: string;
    description: string;
    deadline: Date;
    priority: 'средний' | 'высокий';
    isDone: boolean;
};

export type IGoal = {
    id: number;
    subject: string;
    name: string;
    description: string;
    deadline: Date;
    Progress: number;
    tasks: ITask[];
};

type ContextType = {
    goals: IGoal[];
    addGoal: (goal: Omit<IGoal, 'id'>) => void;
    addTask: (goalId: number, task: Omit<ITask, 'isDone'>) => void;
    completeTask: (goalId: number, taskId: number) => void;
    uncompleteTask: (goalId: number, taskId: number) => void;
}

export const GoalsContext = createContext<ContextType>({
    goals: [],
    addGoal: () => {},
    addTask: () => {},
    completeTask: () => {},
    uncompleteTask: () => {},
});

type Props = {
    children: React.ReactNode;
}

const GoalsProvider: React.FC<Props> = ({children}) => {
    const [goals, setGoals] = useState<IGoal[]>([]);

    const addGoal = (newGoal: Omit<IGoal, 'id'>) => {
        const id = goals.length > 0 ? Math.max(...goals.map((g) => g.id)) + 1 : 1;
        const goalWithId: IGoal = { ...newGoal, id, tasks: [], progress: 0 };
        setGoals([...goals, goalWithId]);
    };

    // Function to add a new task to a specific goal
    const addTask = (goalId: number, newTask: Omit<ITask, 'isDone'>) => {
        const tasks = goals.find((goal) => goal.id === goalId)?.tasks;
        const id = tasks?.length ? tasks?.length + 1 : 1;
        setGoals(
            goals.map((goal) =>
                goal.id === goalId
                    ? {
                        ...goal,
                        tasks: [...goal.tasks, { ...newTask, isDone: false, id }],
                    }
                    : goal
            )
        );
    };

    const completeTask = (goalId: number, taskId: number) => {
        const fixedGoals = goals.map((goal) => {
            if (goal.id === goalId) {
                const goalTasks = goal.tasks.map((task) => {
                    if (task.id === taskId) {
                        return {...task, isDone: true}
                    } else {
                        return task
                    }
                })
                return {...goal, tasks: goalTasks};
            }
            return goal;
        });
        console.log(fixedGoals);
        setGoals(fixedGoals);
        // updateProgress(goalId);
    };

    const uncompleteTask = (goalId: number, taskId: number) => {
        setGoals(
            goals.map((goal) =>
                goal.id === goalId
                    ? {
                        ...goal,
                        tasks: goal.tasks.map((task) =>
                            task.id === taskId ? { ...task, isDone: false } : task
                        ),
                    }
                    : goal
            )
        );
        updateProgress(goalId);
    };

    const updateProgress = (goalId: number) => {
        setGoals(
            goals.map((goal) => {
                if (goal.id === goalId && goal.tasks.length > 0) {
                    const totalTasks = goal.tasks.length;
                    const completedTasks = goal.tasks.filter((task) => task.isDone).length;
                    const progress = Math.round((completedTasks / totalTasks) * 100);
                    return { ...goal, progress };
                }
                return goal;
            })
        );
    };

    const value = {
        goals,
        addGoal,
        addTask,
        completeTask,
        uncompleteTask,
        updateProgress,
    }
  return(
      <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>
  );
};

export default GoalsProvider;

// Custom hook to use the context
export const useGoalsContext = () => {
    const context = useContext(GoalsContext);
    if (!context) {
        throw new Error('useGoalsContext must be used within a GoalsProvider');
    }
    return context;
};
