import "./index.scss"
import { CheckCircle, Trash } from 'react-bootstrap-icons';
const Task = ({taskDB}) => {

  return (
    <div className='tasks'>
        <div>
            <CheckCircle/>
        </div>
        {taskDB.name}
        <div>
            <Trash />
        </div>
    </div>
  )
}

export default Task