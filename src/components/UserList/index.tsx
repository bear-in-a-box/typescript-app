import React, {useState, useEffect} from 'react';
import './style.css';

type Props = {
    searchUser:string;
    sourceData:Array<Person>;
}
type Person = {
    name:string;
    username:string;
}

const UserList: React.FC<Props> = ({searchUser,sourceData}) =>{
    const [filteredUsers, setFilteredUsers] = useState<Person[]>([]);
    
    useEffect(() => {
        setFilteredUsers(
            sourceData.filter((Person) =>
            Person.name.toLowerCase().includes(searchUser.toLowerCase())
            )
        );
    },[searchUser, sourceData]);

    return(
        <div className="ListHead"> 
            <ol className="list">
                {filteredUsers.map((Person) => (
                    <li key={Person.name}>
                        <span>{Person.name}</span>
                        @{Person.username}
                    </li>
            ))}
            </ol>
        </div>
    )}
export default UserList
