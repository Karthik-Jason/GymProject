import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button,Modal} from 'react-bootstrap';

export default class DeleteTrainee extends Component {
    onSubmit = (e) => {
        console.log("Trainee will be deleted ")
        axios.delete('http://localhost:4000/trainees/delete/'+this.props.match.params.id)
            .then(res => console.log("deleted data : ",res.data));
             this.props.history.push('/trainees');
             this.props.history.go();
             console.log(`Trainee Deleted successfully!`);
    }
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header closeButton>Confirm Your Changes</Modal.Header>  
                <Modal.Body>Are you sure to Delete this Trainee Details ?</Modal.Body>  
                <Modal.Footer>
                <Link to="/trainees"> <Button>Close</Button></Link>
                <Link to="/trainees"> <Button onClick={(e)=>this.onSubmit(e)}>Delete</Button></Link>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}