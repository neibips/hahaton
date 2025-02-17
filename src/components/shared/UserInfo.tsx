import React, {useEffect, useState} from 'react';
import Button from "./Button.tsx";
import UserPhoto from '../../assets/user.png';
import AddTaskModal from "./AddTaskModal.tsx";
import {useGoalsContext} from "../../state/GoalsContext.tsx";

type Props = {

}

const dev: boolean = true;

const UserInfo: React.FC<Props> = ({}) => {
    const [user, setUser] = useState();
    const { addTask } = useGoalsContext();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const getUser = async () => {
        const result = await fetch(dev ? 'http://171.22.31.0:3000/users/1' : 'http://localhost:3000/users/1').then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
            .then(data => data)
            .catch(error => console.error('Error:', error));

        return result;
    }

    useEffect(() => {
        getUser()
            .then((result) => setUser(result));
    }, []);

  return(
    <div className={'mx-2 flex flex-col gap-4 justify-center'}>
        <div className={'flex flex-col gap-4'}>
            <div className="w-[80px] h-[80px] rounded-full">
                <img src={UserPhoto}/>
            </div>
            <div>
                <div className="text-[30px] text-dark leading-6">
                    <p>Иванов И.В.</p>
                </div>
                <div className="text-[20px] text-key">
                    <p>Группа: {user?.group}</p>
                </div>
            </div>
            <div className="">
                <div className="text-[20px] text-dark">
                    <p>example@mail.ru</p>
                </div>
                <div className="text-[16px] text-light">
                    <p>ID: 102020</p>
                </div>
            </div>
        </div>
        <Button onClick={openModal} title={'ДОБАВИТЬ ЗАДАЧУ'}/>
        <AddTaskModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            addTask={(task) => addTask(1, task)} // Replace 1 with the actual goal ID
        />
    </div>
  );
};

export default UserInfo;
