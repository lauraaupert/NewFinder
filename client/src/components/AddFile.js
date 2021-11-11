import React from "react"
import Form from 'react-bootstrap/Form'

function AddFile() {
    return (
      <Form>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Share a photo" />
        </Form.Group>
      </Form>
    )
}

export default AddFile;