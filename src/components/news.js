import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';

const Inshortnews = (props) => {
  
  const [data, setData] = useState([]);
  function Apiget() {
    fetch(`https://inshortsapi.vercel.app/news?category=${props.category}`)
    .then((response) => response.json())
    .then((json) => {
        setData(json.data);
  })
}

  useEffect(
    () => { 
      Apiget();
      const api = setInterval(() => {
        Apiget();
      },10000);
      return () => clearInterval(api);
      // eslint-disable-next-line
    },[])


  return (
    <div>
      <h1 style={{marginTop: "100px",fontFamily: "",textAlign: "center",fontWeight: "900"}}>the News Express - Headlines</h1>
      <Container>
                        <Row xs={1} sm={2} md={3} className='g-4'
                        style={{margin:"20px 0 0 0",display: "flex",justifyContent:"center"}}>       
                        {
                        data.map((item) => {
                          return (
                            <>
                             <Col className='container-fluid mt-3' style={{margin: "0 0 30px 0"}}>
                              <Card style={{ width: "20rem"}} className='h-100'>  
                              <Card.Header>
                                  <Card.Link key={item.url} href={item.url} target='_blank'>
                                    <Button variant='primary' style={{margin: "0 30px 0 20px"}}>Video link</Button>
                                  </Card.Link>
                      
                                  <Card.Link key={item.readMoreUrl} href={item.readMoreUrl} target='_blank'>
                                    <Button variant='secondary'>Full article</Button>
                                  </Card.Link>
                              </Card.Header>
                                
                                <Card.Img variant="top" className="card-img-top img-fluid" style={{width: "20rem", height: "20rem",objectFit: "cover"}} key={item.imageUrl} src={item.imageUrl}/>

                                <Card.Body>                              
                                <Card.Title style={{fontWeight: "700",margin: "0 0 30px 0"}} key={item.title}>{item.title}</Card.Title>
                                 <Card.Text key={item.content}>  {item.content} </Card.Text>
                                <Card.Footer>
                                  <small className="text-muted" style={{fontStyle: "italic",fontSize: "12px"}} key={item.author}>By {item.author} on {item.date}</small>
                                </Card.Footer>
                              </Card.Body>
                            </Card>
                        </Col>
                        </>
                            )
                          }
                        )
                      }
                      </Row>
                    </Container>
    </div> 
  );
};

Inshortnews.rotoTypes = {
  category: PropTypes.string,
}

export default Inshortnews;