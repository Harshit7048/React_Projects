import './ttt.css'
import cross_img from '../assets/cross-ttc.png'
import circle_img from '../assets/circle-ttc.png'
import { useEffect, useRef, useState } from 'react';

let data = ["","","","","","","","",""];

export default function TicTacToe(){

    const [count , setCount] = useState(0);

    const [lock,setLosck] = useState(false);
    const [win , setWin] = useState(false)
    const titleRef = useRef(null);
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box9 = useRef(null)

    const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];


    const toggle = (e,num)=>{

        if(lock) return 0;

        if(count%2===0){
            e.target.innerHTML = ` <img src="${circle_img}" alt="" />`;

            data[num]="o";
            setCount( count + 1)
            console.log("this is even");
        }
        else{
              e.target.innerHTML = ` <img src="${cross_img}" alt="" />`;

            data[num]="x";
            setCount( count + 1)
            console.log("this is odd");
        }
        checkWIn()
    }


    const checkWIn = ()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            winner(data[2])
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            winner(data[5])
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            winner(data[8])
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            winner(data[6])
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            winner(data[2])
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            winner(data[7])
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
           winner(data[8])
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            winner(data[6])
        }
        
    }

    const winner = (win)=>{
        
            setLosck(true)
            if(win==="x"){
                titleRef.current.innerHTML = "we have a winner : x";
            }
            else{
                titleRef.current.innerHTML = "we have a winner : o";

            }

         
    }
     
    const reset = ()=>{
        setLosck(false);
        setCount(0);
        data = ["","","","","","","","",""];

        boxes.map((ele)=>{
            ele.current.innerHTML = ""
        })

        titleRef.current.innerHTML = "TIC TAC TOE REACT"
    }
 


    return <div className="ttc-main">
            <h1 ref={titleRef}> TIC TAC TOE REACT</h1>
        <div className="container">
            <div className="box" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className="box" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className="box" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
            <div className="box" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            <div className="box" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
            <div className="box" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
            <div className="box" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
            <div className="box" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
            <div className="box" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
        <button className='reset-btn' onClick={reset}>Reset</button>
    </div>
}