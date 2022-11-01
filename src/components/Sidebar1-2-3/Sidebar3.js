import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
//import { useParams } from "react-router-dom";

 function SideBar3() {

    const { all } = useSelector((state) => state );
  
    const {email,type} = all.selectemail

 const {index} = all.indexemail




console.log('index',all[type][email][index]);

return (
        
        <div className="msg-detail-Box">
        <h2 className="updateTitle">Updated Report</h2>
        <div className="demo1" data-simplebar >
           
        {/* {all[type][email][index] ((type, index) => { 
               return ( */}
            <div className="msgOne" >

            <div className="rightLink">
            {Object.values(all[type][email][index]).length>0 ? (
                    <div className="userTitle">
                  
                        <div className="user"><img src="Images/user.png" alt='' /></div>
                       
                        <h3>{all[type][email][index].From}</h3> 
                        <p>{all[type][email][index].Date}</p>
                        <p>{ `${all[type][email][index].Subject || 'info@gmail.com '}`}</p>
                      
                    </div>
                      ):'' }
                    </div>
                
                   
                
            {Object.values(all[type][email][index]).length>0 ? (
                <div className="msgDis">
                    <p>{ `${all[type][email][index].Body || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu '}`}</p>
                    {/* <p>{all[type][email][index].From}</p> */}
                    <div className="thanks">
                        Thanks
                        <span>{all[type][email][index].From}</span>
                
                    </div>

                  
                </div>
            ):'' }

            </div>

           
        
         {/* ) 
 }) }    */}



        </div>

    </div>
    
    )
}

 export default SideBar3