import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import {IGoal, ITask, useGoalsContext} from "../../state/GoalsContext.tsx";

// Define custom styles for the modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff',
    },
};

interface AddTaskModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onRequestClose }) => {
    const { goals, addTask, addGoal } = useGoalsContext();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState('средний');
    const [selectedGoalId, setSelectedGoalId] = useState<number | null>(null);
    const [newGoalName, setNewGoalName] = useState('');

    useEffect(() => {
        if (goals.length > 0) {
            setSelectedGoalId(goals[0].id);
        }
    }, [goals]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !description || !deadline || selectedGoalId === null) return;

        const task: Omit<ITask, 'isDone'> = {
            name,
            description,
            deadline: new Date(deadline),
            priority,
        };

        addTask(selectedGoalId, task);
        onRequestClose();
        setName('');
        setDescription('');
        setDeadline('');
        setPriority('средний');
        setSelectedGoalId(null);
    };

    const handleAddGoal = () => {
        if (!newGoalName) return;

        const newGoal: Omit<IGoal, 'id'> = {
            subject: '',
            name: newGoalName,
            description: '',
            deadline: new Date(),
            progress: 0,
            tasks: [],
        };

        addGoal(newGoal);
        setNewGoalName('');
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
            <h2>Добавить задачу</h2>
            <form onSubmit={handleSubmit}>
                <select
                    value={selectedGoalId}
                    onChange={(e) => setSelectedGoalId(Number(e.target.value))}
                    className="w-full p-2 mb-2"
                >
                    <option value="">Выберите цель</option>
                    {goals.map((goal) => (
                        <option key={goal.id} value={goal.id}>
                            {goal.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Наименование"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-2"
                />
                <textarea
                    placeholder="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 mb-2"
                />
                <div className="flex">
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="mr-2 p-2"
                    >
                        <option value="средний">Средний</option>
                        <option value="высокий">Высокий</option>
                    </select>
                    <input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="p-2"
                    />
                </div>
                <button type="submit" className="mt-4 bg-black text-white p-2 rounded">
                    Создать задачу
                </button>
            </form>
            <div>
                <input
                    type="text"
                    placeholder="Новая цель"
                    value={newGoalName}
                    onChange={(e) => setNewGoalName(e.target.value)}
                    className="w-full p-2 mb-2"
                />
                <button onClick={handleAddGoal} className="bg-black text-white p-2 rounded">
                    Добавить цель
                </button>
            </div>
        </Modal>
    );
};

export default AddTaskModal;
