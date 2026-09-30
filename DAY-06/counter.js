import React,{useState} from 'react'
const Counter=() => {
    let[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
        console.log(count);
    }
    return 
}