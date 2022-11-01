import React from 'react'

function ContactList() {
  return (
    <div>
        <div className="container">
			<div className="row">
		        <div className="dual-list list-left col-md-5">
		            <div className="well text-right">
		                <div className="row align-items-center">
		                    <div className="col-auto">
		                        <div className="btn-group">
		                            <a className="btn btn-default selector" title="select all"><i className="far fa-square"></i></a>
		                        </div>
		                    </div>
		                    <div className="col">
		                        <div className="input-group">
		                            <input type="text" name="SearchDualList" className="form-control" placeholder="search" />
		                            <span className="input-group-addon">
		                            	<i className="fas fa-search"></i>
		                            </span>
		                        </div>
		                    </div>
		                </div>
		                <ul className="list-group">
		                    <li className="list-group-item">bootstrap-duallist <a href="https://github.com/bbilginn/bootstrap-duallist" target="_blank">github</a></li>
		                    <li className="list-group-item">Dapibus ac facilisis in</li>
		                    <li className="list-group-item">Morbi leo risus</li>
		                    <li className="list-group-item">Porta ac consectetur ac</li>
		                    <li className="list-group-item">Vestibulum at eros</li>
		                </ul>
		            </div>
		        </div>

		        <div className="list-arrows col-md-1 text-center d-flex flex-column justify-content-center align-items-center">
		            <button className="btn btn-default btn-sm move-right">
		                <i className="far fa-arrow-square-right"></i>
		            </button>
		            <button className="btn btn-default btn-sm move-left">
		                <i className="far fa-arrow-square-left"></i>
		            </button>
		        </div>

		        <div className="dual-list list-right col-md-5">
		            <div className="well">
		                <div className="row align-items-center">
		                    <div className="col-auto">
		                        <div className="btn-group">
		                            <a className="btn btn-default selector" title="select all"><i className="far fa-square"></i></a>
		                        </div>
		                    </div>
		                    <div className="col">
		                        <div className="input-group">
		                            <input type="text" name="SearchDualList" className="form-control" placeholder="search" />
		                            <span className="input-group-addon">
		                            	<i className="fas fa-search"></i>
		                            </span>
		                        </div>
		                    </div>
		                </div>
		                <ul className="list-group">
		                    <li className="list-group-item">Cras justo odio</li>
		                    <li className="list-group-item">Dapibus ac facilisis in</li>
		                    <li className="list-group-item">Morbi leo risus</li>
		                    <li className="list-group-item">Porta ac consectetur ac</li>
		                    <li className="list-group-item">Vestibulum at eros</li>
		                </ul>
		            </div>
		        </div>
			</div>
		</div>
    </div>
  )
}

export default ContactList