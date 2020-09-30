import React, {useState, useEffect} from 'react';
import axios from 'axios';

type DownloadData ={
    sourceData:Array<Person>;
}
type Person={
    name:string;
    username:string;
}
export const DownloadUser = React.createContext<DownloadData>(
    {} as DownloadData);


const DownloadContext:React.FC= ({children}) => {
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
        <DownloadUser.Provider value={users}>
            {children}
        </DownloadUser.Provider>
            
    )
}
export default DownloadContext