import React from 'react'

function Timeline() {
  return (
    
		
			<div className="container mb-4">
        <div className="col-sm-8">
		    	<div className="modal-box">
		    		<form>
		    			<h3>Set Delivery Time</h3>
		    			<p>Set Specific delivery time</p>
		    			<div className="d-flex align-items-center mt-3">
						  <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
						  <label className="form-check-label" htmlFor="flexRadioDefault1">
						    Contact's time zone
						  </label>
						</div>
						<div className="d-flex align-items-center mb-3">
						  <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
						  <label className="form-check-label" htmlFor="flexRadioDefault2">
						    My time zone
						  </label>
						</div>
						<div className="row mb-3 justify-content-start">
							<div className="col-auto"><input type="date" min="2017-08-15" max="2018-08-26" step="7"/></div>
							<div className="col-auto"><input type="time" value="13:00" step="900"/></div>
						</div>
						<div className="mb-3">
							<label className="col-auto w-auto">Delivery Options (time between each email)</label>
	    					<div className="col-sm">
								<select className="form-select" aria-label="Default select example">
									<option selected>Select time</option>
									<option value="1">0 sec</option>
									<option value="2">1 sec</option>
									<option value="3">1 min</option>
									<option value="3">1 day</option>
									<option value="3">1 week</option>
								</select>
							</div>
						</div>
						<div className="d-flex justify-content-end align-items-center">
	    					<a className="btn-primary me-2" href="">Schedule Email</a><a className="btn-alternate" href="">Cancel</a>
	    				</div>
		    		</form>
		    	</div>
		    </div>
			</div>
    
  )
}

export default Timeline;