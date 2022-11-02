import React from 'react';
import NewFields from '../New/NewFields';
import ImportContact from '../ImportContact';
 import ContactList from '../ContactList';
 import Template from '../Template';
 


function Home() {
  return (
    <div>

        <main className="main">

        <NewFields/>
        <ImportContact/>
        <ContactList/>
        <Template/>
        </main>
    </div>
  )
}

export default Home