import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import AddTask from './components/AddTask/AddTask';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {

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
          className='todo__list'
          xs={{span: 10, offset: 1}}
          md={{span: 6, offset: 3}}
        >
          <p>List task</p>
        </Col>
        <Col  
          className='todo__input'
          xs={{span: 10, offset: 1}}
          md={{span: 6, offset: 3}}
        >
        </Col>
        <AddTask />
      </Row>
    </Container>
  )
}

export default App
