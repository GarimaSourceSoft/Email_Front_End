import React, { useCallback, useEffect, useState } from "react";
//import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPayload, setSelectedEmail , setIndexEmail} from "../../Store/Actions";
import { EMAILS_INBOX } from "../../Store/Actions/Type";
import { EMAILS_OUTBOX } from "../../Store/Actions/Type";
// import { EMAILS_UNREAD } from "../../Store/Actions/Type";

import Accordion from 'react-bootstrap/Accordion';


function Sidebar1() {

  const dispatch = useDispatch();

  const FetchApi = useCallback(async () => {
    dispatch(getPayload(EMAILS_INBOX));
    dispatch(getPayload(EMAILS_OUTBOX));
    // dispatch(getPayload(EMAILS_UNREAD));
  }, [dispatch]);

  useEffect(() => {
      FetchApi();
  }, []);


  const { all } = useSelector((state) => state);

  const handleChange = (email,type)=> {
    dispatch(setSelectedEmail({email,type}));
  }

 

  return (

    <div className="createMsg">
      <div className="crMsg"><a href="#" onClick={(e) => e.preventDefault()}><img src="Images/envelop.png" alt='' /></a></div>


      <div className="group">
        <div className="groupAdd"><img src="Images/group.png" alt='' /> Groups </div>


        <Accordion defaultActiveKey={0} alwaysOpen >

          {Object.keys(all?.inbox || {}).length && Object.keys(all?.inbox || {}).map((item, index) => (
            <Accordion.Item eventKey={index}>
              <ul className="group-nav">
                <Accordion.Header>
                  <li>
                    <i className="fas fa-chevron-right"></i> {item}</li> </Accordion.Header>
                <Accordion.Body>

                  <ul className="inbox-nav">

                    <li>
                      <a href="/inbox" onClick={(e) =>{ e.preventDefault(); handleChange(item,'inbox')}} className="active"><img src="Images/inbox.png" alt='' /> Inbox Email </a></li>
                    <li><a href="/outbox" onClick={(e) => { e.preventDefault(); handleChange(item,'outbox')}}><img src="Images/send.png" alt='' /> Outbox Email </a></li>
                    {/* <li><a href="/unread" onClick={(e) => { e.preventDefault(); handleChange(item,'unread')}}><img src="Images/unRead.png" alt='unread' /> UnRead Email </a></li> */}
                  </ul>
                </Accordion.Body>
              </ul>
            </Accordion.Item>
          )
          )}
        </Accordion>


      </div>

    </div>

  )
}

export default Sidebar1;