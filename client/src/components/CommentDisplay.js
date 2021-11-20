import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Accordion} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { motion } from "framer-motion"
import authenticatedUserContext from '../utils/authenticatedUserContext'
import { useState } from 'react';
import passport from '../utils/passport';
import AccordComment from './AccordComment';

function CommentDisplay(props) {
    console.log(props)
    const context = useContext(authenticatedUserContext)
    const [newComment, setNewComment] = useState("")

    const [show, setShow] = useState(false)
    console.log(context.maps[props.index].mapDescription)
    console.log(context.comment)
    function showForm(e) {
        e.preventDefault();
        if (show) setShow(false)
        else setShow(true)
    }

    function onClick(e) {
        e.preventDefault()
        const day = Date.now();
        const index = props.index;
        let comment = {index, day, newComment};
        passport.saveComment(context._id, comment)
        .then(passport.LogIn(context.email, context.password))

        .then(window.location.reload())
   
        setShow(false)
        setNewComment("")
        passport.getUser().then(user =>console.log(user))
    }

    let mapComments = [];
    mapComments = context.comment.filter(comment => {
        return (comment.index === props.index)
    })


    return(
        <motion.div
        style={{
        width: "40%", 
        // height: "400px",
        display: "flex",
        zIndex: "3",
        borderRadius: "50%"
    }}
        initial={{opacity: 0}}
        animate={{opacity: .9}}
        transition={{duration: 2}}
        drag
        
        dragSnapToCenter={true}
        dragConstraints={{
            top: 0,
            left: 0, 
            right: 500,
            bottom: 500,
        }}
        >
            <Card style={{width: "100%", borderRadius: "50%", backgroundColor: "lightblue"}}>
                <Card.Title>
                    {context.maps[props.index].mapName}
                </Card.Title>
                <Card.Body>
                    <Card.Text >
                {context.maps[props.index].mapDescription}
                </Card.Text>
                {mapComments.map(comment => {
                    return(
                        <Card.Text style={{border: "1px solid black",}} key={comment.day}>
                            {comment.newComment}
                        </Card.Text>
                    )
                })}

                {/* <Accordion style={{backgroundColor: "yellow"}}>
   <Accordion.Item >
   <Accordion.Header>Add Comment</Accordion.Header>
<Accordion.Body>
     <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment:</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => setNewComment(e.target.value)} value={newComment} />
        </Form.Group>
        <Button variant="danger" onClick={onClick}
        >
            Add Comment
        </Button>

    </Form> 
   </Accordion.Body>
  </Accordion.Item>
  </Accordion>  */}
  <Button variant="secondary" onClick={showForm}>Add Comment</Button>
  {show &&
//   <AccordComment index={props.index} show={show}/>
<Form >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment:</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => setNewComment(e.target.value)} value={newComment} />
        </Form.Group>
        <Button variant="danger" onClick={onClick} style={{marginBottom: "30px"}}
        >
            Save Comment
        </Button>

    </Form> 
}
  </Card.Body>

            </Card>
      </motion.div>
    )
}

export default CommentDisplay;