import React from 'react';
import { Link } from 'react-router-dom';

//import NavLink from "./NavLink";

function Header() {
  return (
    <div>
        <header>
		<div className="container">		
			<div className="tab-wrapper">
				<ul className="tabs d-flex justify-content-center">
					<li className="tab-link" data-tab="1">Contacts</li>
					<li className="tab-link" data-tab="2">Accounts</li>
					<li className="tab-link" data-tab="3">Tasks</li>
					<li className="tab-link " data-tab="4">New</li>
					<li className="tab-link active" data-tab="4"><Link to={"/email"}>Emails</Link></li>
				</ul>
			</div>
		</div>
	</header>
    </div>
  )
}

export default Header