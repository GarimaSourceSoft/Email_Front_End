import React from 'react'

function Template() {
  return (
    
<div className="container">
	    	<div className="row justify-content-center">
	    		<div className="col-md-7">
	    			<form className="templateform">
	    				<div className="row mb-3">
	    					<label className="col-auto w-auto">Add Template</label>
	    					<div className="col-sm">
								<select className="form-select" aria-label="Default select example">
									<option selected>Enter Template Name</option>
									<option value="1">Template Name One</option>
									<option value="2">Template Name Two</option>
									<option value="3">Template Name Three</option>
								</select>
							</div>
	    				</div>
	    				<div className="row mb-3">
	    					<label className="col-auto w-auto">Subject<span className="text-danger">*</span></label>
	    					<div className="col-sm">
	    						<input type="email" className="form-control" id="" placeholder="Type Subject"/>
	    					</div>
	    				</div>
	    				<div className="mb-3">
							<textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
						</div>
	    				<div className="d-flex justify-content-end align-items-center">
	    					<div className="btnGroup me-2"><a className="btn-primary roundedright-0" href="">Send</a><a className="btn-primary roundedleft-0" href=""><i className="far fa-chevron-up"></i></a></div><a className="btn-alternate" href="">Cancel</a>
	    				</div>
	    			</form>
	    		</div>
	    	</div>
    </div>
  )
}

export default Template