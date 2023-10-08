import {Container, Row, Col} from 'react-bootstrap';
import AddTask from './components/AddTask/AddTask';
import {useState, useEffect} from 'react';
import {db} from './utils/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Task from './components/Task/Task';

function App() {
  const [tasksDB, setTasksDB] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(query(collection(db, "tasks"), orderBy('completed')))
      const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
      console.log(arrayData)
      setTasksDB(arrayData)
    }
    getData()
  }, [])

  return (
    <Container className='app' fluid>
      <div className='title'>
        <h1>To Do list</h1>
      </div>

      <Row className='todo'>
        <Col  
          className='todo__title'
          xs={{span: 10, offset: 1}}
          md={{span: 6, offset: 3}}
        >
          <h2>Today</h2>
        </Col>
        <Col  
          className='todo__input'
          xs={{span: 10, offset: 1}}
          md={{span: 6, offset: 3}}
        >
        </Col>
        <AddTask />
      </Row>
      <Col  
          className='todo__list'
          xs={{span: 10, offset: 1}}
          md={{span: 6, offset: 3}}
        >
        {
          tasksDB.map(task => (
            <Task 
              taskDB={task}
              key={task.id}
            />
          ))
        }
        </Col>
    </Container>

  )
}

export default App
