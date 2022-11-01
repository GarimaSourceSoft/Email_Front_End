
//import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setIndexEmail} from "../../Store/Actions";


function Sidebar2() {

    const dispatch = useDispatch();
    const { all } = useSelector((state) => state);

const {email,type} = all.selectemail

const onChange = (index)=> {
    dispatch(setIndexEmail({index}));
  } 

 

    return (

        <div className="msgBox">
            <div className="search">
                <input type="text"
                    placeholder="Search Here"

                />
                <button><img src="Images/search.png" alt='' /></button>
            </div>
            <div className="today">Today</div>

            <div className="demo1" data-simplebar>
                <ul className="msg_detail" >
                    {all[type][email] && all[type][email].map((type, index) => {
                        console.log('type',type);
                        return (
                            <li key={index}>
                                <div className="msgDetail unRead" onClick={(e) =>{ e.preventDefault(); onChange(index)}}>
                                    <figure><img src="Images/unRead.png" alt='' /></figure>
                                    <h6>{`${type.From || 'Annie Lynch'}`}<span></span>{`${type.Date || '14:20 PM'}`}</h6>
                                    <h3>{`${type.Subject || 'How are you getting on ?'}`}</h3>
                                    <p> {`${type.Body || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}`}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar2;