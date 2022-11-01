import React from 'react'

function ImportContact() {
  return (
    <div>
        <div class="container mb-4">
        <div class="container-wrap mt-5">
					    <div class="row justify-content-between align-items-stretch">
					        <div class="col-sm-4 col-md-5">
					          <div class="step_asdie">
					            <div class="left-side">
					                <div class="steps-content">
					                    <h3>Import Contacts</h3>
					                    <p>form CSV or xlsx</p>
					                </div>
					                <ul class="progress-bars">
					                    <li class="active">Uplaod File</li>
					                    <li>Map Fields</li>
					                    <li>Import Setting</li>
					                    <li>Review List</li>
					                </ul>                
					            </div>
					          </div>
					        </div>
					        <div class="col-sm-8 col-md-7">
						        <div class="step_forms-wrap py-5 h-100">
						            <form class="" action="" method="">
						              	<div class="form-group">
											<div class="file-upload">
												<div class="image-upload-wrap text-center">
													<input class="file-upload-input" type="file" onchange="readURL(this);" accept="image/*"/>
													<div class="drag-text">
														<h3>Drop files here<span>Supported formats: CSV/Excel File</span></h3>
													</div>
													<div class="block-or">OR</div>
													<button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Browse files</button>
												</div>
												<div class="file-upload-content">
													<img class="file-upload-image" src="#" alt="your image"/>
													<div class="image-title-wrap">
														<button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
													</div>
												</div>
											</div>
										</div>
						          	</form>
						        </div>
						    </div>
						</div>
					</div>
					</div> 
				</div>

  )
}

export default ImportContact