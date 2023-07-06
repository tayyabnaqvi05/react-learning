import React, { useState, useEffect } from 'react';
import {Card} from 'primereact/card';
import { Button } from 'primereact/button';


const Home = () => {
const [count,setCount] = useState(0);

const Increment = () => {
  setCount (preCount => preCount +1);
};
const decrement = () => {
  setCount (preCount => preCount - 1);
}; 
useEffect(() => {
  document.title = `${count}`;
}, [count]);


  return (
    <>    
    <div className="grid">
      <div className="col-4">
      <Card className="m-3 shadow-5">
        <h2 className="text-4xl p-0 mb-2">Counter: {count}</h2>
        <Button onClick={Increment} label="Increment" className="p-button-success mr-3" />
         <Button onClick={decrement} label="Decrement"  className="p-button-warning " />
        </Card>
        
      </div>
    </div>
        
    </>
  );
};

export default Home;
