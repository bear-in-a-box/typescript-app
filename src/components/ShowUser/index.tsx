import React, {useState} from 'react';
import UserList from '../UserList';
import Debounce from '../Debounce';
import ChangeTheme from '../ChangeTheme';
import { ThemeProvider } from "../../contexts/ThemeContext";
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
        <ThemeProvider>
        <div className="SearchHead">
            <p>Users List</p>
            <p>
            <Debounce onChange={setShowUser} />
            </p>
            <UserList searchUser={showUser} sourceData={sourceData}/>
            <ChangeTheme/>
        </div>
        </ThemeProvider>
    )
}

export default ShowUser
