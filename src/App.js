import './App.css';
import React, { useState } from 'react';
import {expenses} from './components/data'
import './components/Modal';

function App() {
  
  const [modal, setModal] = useState(false);
  const [arrId, setCount] = useState(0);

  const toggleModal = (event,key) => {
    setModal(!modal);
    
    
    
   
    
  };
  

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  var totalExpense=0;
  
  
  
  
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div style={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
        
      }}>
      {expenses.map((expense,index)=>(
        totalExpense = expense.price+totalExpense,
        <div>
          <div key={expense.id} onClick={event=> {toggleModal(event,expense.id);setCount(expense.id-1)}} style={{padding:'10px', backgroundColor:'deepskyblue', width: '500px', height: '100px',borderRadius:'5px'}}>
            <h2 align='left'>{expense.name}</h2>
            <h3 text-aligh='center' align='right' >Php{expense.price}.00</h3>
            
          </div>
          <h1></h1>

        </div>
        
          
        ))}
        

      </div>
       
      <h2>Total: Php {totalExpense}</h2>
      {modal && (
              <div className="modal">
                <div onClick={toggleModal} ></div>
                  <div className="modal-content">
                    <h4 align='left'>{window.location.host} says</h4>
                    <h5>You clicked {expenses[arrId].name} - Php {expenses[arrId].price}</h5>
                    <button className="close-modal" onClick={toggleModal}>
                      OK
                    </button>
                  </div>
              </div>
            )}
      
      

      
    </div>
    
  );
}

export default App;
