import './App.css';
import { PersonajeCard } from './components/PersonajeCard';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(resp => resp.json())
    .then(data => setData(data.results))
  },[])
  
  return (
  <div className="princ">
    <Row xs={2} lg={6}  className="g-4">
        {data && data.map((element) => (
          <Col key={"col-"+element.name}>
            <PersonajeCard
              key={element.name} 
              nombre={element.name}
              img={element.image}
              genero={element.gender}
              estado={element.status}
            />
          </Col> 
        ))}  
    </Row>
  </div>
  );
}

export default App;
