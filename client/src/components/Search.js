import React, { useState } from "react"
import { Button, Form, Col, Row } from "react-bootstrap"
import AddModal from "./AddModal"

function Search(props) {
  const [allData,setAllData] = useState(props.markers);
  const [filteredData,setFilteredData] = useState(allData);

  const handleSearch = (event) =>{
    let value = event.target.value.toLowerCase();
    let result = [];

    result = allData.filter((data) => {
      return data.name.toLowerCase().search(value) !== -1;
    });

    // if (result.length < 1) {
    //   let showResult =[];
    //   showResult = allData.filter((data) => {
    //     return data.show.search(value) !== -1;
    //   });
    //   result = showResult;
    //   console.log(result)
    // };
   
    props.setAllMarkers(result);

    // markerContext.setList(result);
  };

  // useEffect(() => {
  //   setAllData(context.markers)
  // }, [])
  // useEffect(() => {
  //   api.getUser()
  //   .then(res => {
  //     console.log(res.params)
  //     setAllData(res.data);
  //     setFilteredData(res.data);
  //     context.setList(res.data)
  //   })
  //   .catch(error => {
  //     console.log('Error getting data: ' + error);
  //     })
  // }, 
  // []);

  function handleClick(e) { 
    e.preventDefault();
  }

  return (
    <div>
      <Form>
        <Row>
          {/* <Col lg={4}>
            <AddModal index={props.index} markers={props.markers} />
          </Col> */}
          <Col lg={6}>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="name" placeholder="Find a Saved Place"
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