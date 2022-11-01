import React from 'react';
import Header from '../New/Header';
import NewFields from '../New/NewFields';
import ImportContact from '../ImportContact';
 import ContactList from '../ContactList';
 import Template from '../Template';


function Home() {
  return (
    <div>

        <Header/>

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