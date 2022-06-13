import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Trainee = props => (
    <tr>
        <td>{props.trainee.trainee_name}</td>
        <td>{props.trainee.trainee_address}</td>
        <td>{props.trainee.trainee_fee}</td>
        <td>{props.trainee.trainee_paidon}</td>
        <td>{props.trainee.trainee_joined}</td>
        <td>{props.trainee.trainee_aadhar}</td>
        <td>
         <Link to={"/edit/"+props.trainee._id}><EditIcon/></Link>
        </td>
        <td>
         <Link to={"/delete/"+props.trainee._id}><DeleteForeverIcon color="error"/></Link>
        </td>
    </tr>
)
export default class TraineeList extends Component {
    state = {trainees: []};
    componentDidMount() {
        axios.get('http://localhost:4000/trainees/').then(response => {
            console.log("All trainees ",response.data);
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
            console.log("current trainee ",currenttrainee);
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
                       <th>Aadhar</th>
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