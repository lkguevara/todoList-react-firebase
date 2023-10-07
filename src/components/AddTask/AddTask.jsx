import {Form, Button} from 'react-bootstrap'
import Send from '../../assets/send.svg'
import { useState } from 'react'
import { db } from '../../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'; 
import { ToastContainer, toast } from 'react-toastify';
import './index.scss'

const AddTask = () => {
    const [task, setTask] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!task) {
            toast.error('Debes ingresar una tarea', {
                position: "top-center",
                autoClose: 2000,
                theme: "light",
                });
        }
        else if(task) {
            try {
                addDoc(collection(db, "tasks"), {
                    name: task,
                    completed: false
                });
                toast.success('Tarea agregada correctamente', {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "light",
                });
            } catch (e) {
                toast.error('Error al agregar la tarea', {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "light",
                });
            }
        }
        setTask('')
    }

    const onChange = (e) => {
        setTask(e.target.value)
    }
    
    return (
        <div>
            <Form 
                className='addTask'
                onSubmit={onSubmit}
                onChange={onChange}
            >
                <input type="text" placeholder='Add task' value={task}/>
                <Button variant="primary" type="submit">
                    <img src={Send} alt="send" /> 
                </Button>
            </Form>
            <ToastContainer />
        </div>
    )
}

export default AddTask