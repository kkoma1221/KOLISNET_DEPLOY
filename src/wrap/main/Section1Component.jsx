import React from "react";
import axios from "axios";
import Section1ComponentChild from './Section1ComponentChild'

export default function Section1Component(){

    const[state,setState]=React.useState({
        slide:[],
        notice:[]
    })

    React.useEffect(()=>{
        axios({
            url:'./data/main/section1.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                slide:res.data.slide,
                notice:res.data.notice
            })
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <section id="section1">
            <Section1ComponentChild slide={state.slide} notice={state.notice}/>
        </section>
    )
}