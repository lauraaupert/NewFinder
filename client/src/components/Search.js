import React, { useState, useEffect, useContext } from "react"
import { Button, Form, Col, Row } from "react-bootstrap"
import api from "../utils/api"
import { MarkerContext } from "../utils/MarkerContext"

function Search() {
  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(allData);

  const context = useContext(MarkerContext)

  const handleSearch = (event) =>{
    let value = event.target.value;
    let result = [];
    console.log(value)

    result = allData.filter((data) => {
      return data.name.search(value) !== -1;
    });

    if (result.length < 1) {
      let showResult =[];
      showResult = allData.filter((data) => {
        return data.show.search(value) !== -1;
      });
      result = showResult;
      console.log(result)
    };

    setFilteredData(result);
    context.setList(result);
  };

  useEffect(() => {
    api.getFriends()
    .then(res => {
      console.log(res.data)
      setAllData(res.data);
      setFilteredData(res.data);
      context.setList(res.data)
    })
    .catch(error => {
      console.log('Error getting data: ' + error);
      })
  }, 
  []);

  function handleClick(e) { 
    e.preventDefault();
  }

  return (
    <div>
      <Form>
        <Row>
          <Col lg={11}>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="name" placeholder="Find Someone"
                style={{marginBottom: "20px", marginLeft: "10px"}}
                onChange={(event) =>handleSearch(event)}
              />
            </Form.Group>

          </Col>

          <Col lg={1}>
            <Button variant="warning" type="submit" onClick={handleClick} block>
              Search
            </Button>
          </Col>

        </Row>
      </Form>
    </div>
    )
}

export default Search;