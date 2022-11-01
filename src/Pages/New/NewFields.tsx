import React from 'react';
//import NavLink from "./NavLink";

function NewFields() {
  return (
    
        <div className="container mb-4">
			<div className="content-wrapper">
				{/* <div id="tab-1" className="tab-content">Contact</div>
				<div id="tab-2" className="tab-content">Account</div>
				<div id="tab-3"className="tab-content">Scheduled Tasks</div> */}
				<div id="tab-4"className="tab-content active">
					<div className="new-add d-flex flex-wrap">
						<div className="block">

							<div className="block-inner">
								<a href="" className="d-flex align-items-center justify-content-center flex-column">
									<figure><img className="img-fluid" src="Images/template-icon-v3-small.svg" alt="image"/></figure>
									Template
								</a>
							</div>
						</div>
						<div className="block">
							<div className="block-inner">
								<a href="" className="d-flex align-items-center justify-content-center flex-column">
									<figure><img className="img-fluid" src="Images/contact-icon-v3-small.svg" alt="image"/></figure>
									Import  <br/>Sender
                               </a>
							</div>
						</div>
						<div className="block">
							<div className="block-inner">
								<a href="" className="d-flex align-items-center justify-content-center flex-column">
									<figure><img className="img-fluid" src="Images/import-accounts-icon-small.svg" alt="image"/></figure>
									Import <br/>Receiver
								</a>
							</div>
						</div>
						<div className="block">
							<div className="block-inner">
								<a href="" className="d-flex align-items-center justify-content-center flex-column">
									<figure><img className="img-fluid" src="Images/import-contacts-icon-small.svg" alt="image"/></figure>
									Import <br/>Contacts
								</a>
							</div>
						</div>
						<div className="block">
							<div className="block-inner">
								<a href="" className="d-flex align-items-center justify-content-center flex-column">
									<figure><img className="img-fluid" src="Images/salesflow-icon-v3-small.svg" alt="image"/></figure>
									Salesflow
								</a>
							</div>
						</div>
						<div className="block">
							<div className="block-inner">
								<a href="" className="d-flex align-items-center justify-content-center flex-column">
									<figure><img className="img-fluid" src="Images/tasks-icon-v3-small.svg" alt="image"/></figure>
									Task
								</a>
							</div>
						</div>
						{/* <NavLink to={"/email"}> */}
						<div className="block">
							<div className="block-inner">
								<a href="" className="d-flex align-items-center justify-content-center flex-column">
									<figure><img className="img-fluid" src="Images/email-icon-v3.svg" alt="image"/></figure>
									Email
								</a>
							</div>
						</div>
						{/* </NavLink> */}
		</div>
        </div>
        </div>
        </div>
       	
    
  )
}

export default NewFields