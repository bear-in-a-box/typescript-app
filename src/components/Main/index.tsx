import React, {useEffect,useState} from 'react';
import axios from 'axios';
import ShowUser from '../ShowUser';


const Main:React.FC= () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) =>{
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

    return (
        <div>
            <ShowUser sourceData={users}/>
        </div>
    )
}
export default Main