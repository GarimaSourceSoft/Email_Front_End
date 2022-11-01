import React from 'react'

function Profile() {
  return (
    <div>
        <input type="checkbox" 
        name="mobile-nav" 
        id="mobile-nav" 
        class="gaadiexp-check" 
        onchange="this.blur()"/>
        
<label for="mobile-nav" class="gaadiexp white" tabindex="0"><span></span></label>
<nav role="navigation" class="header-nav">
    <div class="fixed-nav">
     <div class="menu">
   		 <div class="topLogo">
    		<figure><img src="images/logo.png" alt=''/></figure>
   		 </div>
         <div class="profilePic">
         	<div class="pic">A</div>
            <p>Alok Dharayan</p>
         </div>
    	   <ul class="proNav">
              <li><a href="/"><img src="images/envelop2.png" alt=''/> Messages <span>23</span></a></li>
              <li><a href="/"><img src="images/v-task.png" alt=''/> View Tasks</a></li>
              <li><a href="/"><img src="images/logout.png" alt=''/> Logout</a></li>
            </ul>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Profile