import React, {useState} from 'react';
import UserList from '../UserList';
import Debounce from '../Debounce';
import './style.css';

type Person={
    name:string;
    username:string;
}
type Props ={
    sourceData:Array<Person>;
}
const ShowUser:React.FC<Props> = ({sourceData}) => {
    const [showUser, setShowUser] = useState("");

    return (
        <div className="SearchHead">
            <p>Users List</p>
            <p>
            <Debounce onChange={setShowUser} />
            </p>
            <UserList searchUser={showUser} sourceData={sourceData}/>
            
        </div>
    )
}

export default ShowUser
