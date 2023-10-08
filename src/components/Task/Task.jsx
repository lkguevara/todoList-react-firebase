import "./index.scss"
import { CheckCircle, Trash } from 'react-bootstrap-icons';
import { db } from '../../utils/firebase'
import { updateDoc, deleteDoc, doc } from "firebase/firestore";

const Task = ({taskDB}) => {

  const completeTask = () => {
    // cambiar estado a false en la base de datos
    const taskRef = doc(db, 'tasks', taskDB.id)
    updateDoc(taskRef, {
      completed: !taskDB.completed
    })
  }

  const deleteTask = () => {
    // eliminar de la base de datos
    const taskRef = doc(db, 'tasks', taskDB.id)
    deleteDoc(taskRef)
  }

  return (
    <div className='tasks'>
        <div>
            <CheckCircle 
              onClick={completeTask} 
              className={taskDB.completed ? 'completed' : ''}
            />
        </div>
        {taskDB.name}
        <div>
            <Trash 
              onClick={deleteTask} 
            />
        </div>
    </div>
  )
}

export default Task