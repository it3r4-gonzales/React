import React ,{useState, useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Link , useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
}from 'reactstrap';

export const EditUser = (props) => {
    const [selectedUser, setSelected] = useState({
        id:'',
        name:''
    });
    const {users, editUser} = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId=currentUserId;
        const selectedUser =users.find(user => user.id === Number(userId))
        setSelected(selectedUser)
    }, [currentUserId , users])

    const onSubmit = () => {
    history.push('/'); 
    }

    const onChange = (e) => {
        
    }
    return (
 <div>
     <h2>Update User</h2>
     <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Full Name:</Label>
                <Input type="text" value={selectedUser} onChange={onChange} placeholder="Update First Name"/>
            </FormGroup>     
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            <Button type="submit">Update</Button>
        </Form>
 </div>
    )
}