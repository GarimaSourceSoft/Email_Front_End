import React, { Children } from 'react';
import Header from '../Pages/New/Header';


function index(props) {
  return (
    <div>
      <Header />
      {props.children}

    </div>
  )
}

export default index