import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment';

const Trainee = props => (
    <tr>
        <td>{props.trainee.trainee_name}</td>
        <td>{props.trainee.trainee_address}</td>
        <td>{props.trainee.trainee_fee}</td>
        <td>{props.trainee.trainee_paidon}</td>
        <td>{props.trainee.trainee_joined}</td>
    </tr>
)

export default class UnpaidTrainees extends Component{
    state = {trainees: []};
    componentDidMount() {
        axios.get('http://localhost:4000/trainees/').then(response => {
            this.setState({
                trainees : response.data
            })
            // }).catch( (err) => {
            //     console.log(err);
            // })
        })
    }
    traineeList(){
        return this.state.trainees.map((currenttrainee,i) => {
            currenttrainee.trainee_joined = moment(currenttrainee.trainee_joined).format('LL')
            currenttrainee.trainee_paidon = moment(currenttrainee.trainee_paidon).format('LL')
            //2021-10-28T06:58:16.802Z db date format
            let currentDate = moment(new Date()).format('LL');
            let dateDeadLine = moment(currenttrainee.trainee_paidon).add(1, 'months');
            let isUnpaid = moment(currentDate).isAfter(dateDeadLine); // checks last paid was before 1 month or not
            console.log("currentdate : " ,currentDate );
            console.log("dateDeadLine : " ,dateDeadLine );
            console.log("isUnpaid : " ,isUnpaid );
            if(!isUnpaid){ //if fees paid properly just ignore the trainee and go to next so returning null (bcz map function shud return some value outside if else)
                return null;
            }
            return <Trainee trainee={currenttrainee} key={i} />
            
        })
    }
    render() {
        return (
            <div>
               <h3>Our Trainees List</h3>
               <table className="table table-striped" style={{ marginTop: 20}}>
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Address</th>
                           <th>Amount Paid</th>
                           <th>Last Paid on</th>
                           <th>Joined On</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.traineeList()}
                   </tbody>
               </table>
            </div>
        )
     }
    }