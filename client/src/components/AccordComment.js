import React, { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import authenticatedUserContext from '../utils/authenticatedUserContext'
import { useState } from 'react';
import passport from '../utils/passport';
import Button from 'react-bootstrap/Button'



function AccordComment(props) {


    const context = useContext(authenticatedUserContext)
    const [newComment, setNewComment] = useState("")
    // let display = "none"
    // if (props.show) display= "block"
    // if (!props.show) display = "none"
    
    

    function onClick(e) {
        e.preventDefault()
        const day = Date.now();
        const index = props.index;
        let comment = {index, day, newComment};
        passport.saveComment(context._id, comment)
    }

    return(
    <Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment:</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => setNewComment(e.target.value)} value={newComment} />
        </Form.Group>
        <Button variant="danger" onClick={onClick}
        >
            Add Comment
        </Button>

    </Form> 
    )
}

export default AccordComment;