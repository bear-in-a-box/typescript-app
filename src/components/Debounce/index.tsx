import React from 'react';
import {DebounceInput} from 'react-debounce-input';

type Props ={
   onChange:Function;
}

const Debounce:React.FC<Props> = ({onChange}) => {
  return(
        <DebounceInput
          onChange={(e) => onChange(e.target.value)}             
          debounceTimeout={500}	                
          className="SearchInput"	               
          placeholder="Search by user name..."	                
        />      
  )
}

export default Debounce ;