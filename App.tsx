import { useState, Fragment, FC } from 'react';
import axios from 'axios';
import Button from './Button';
import UserData from './UserData';
import './App.css';

interface Iname {
  title: string;
  first: string;
  last: string;
}

interface Iuser {
  picture: string;
  age: number;
  city: string;
  name: Iname;
}

function App() {

const [activeUser, setActiveUser] = useState(false); // state for active user
const [userData, setUserData] = useState([]);       // state for user data
const [loading, setLoading] = useState(false);       // state for loading


const onClickHandler = () => {
  setLoading(true);
  axios.get('https://randomuser.me/api/') // 
  .then((response) => {
    console.log(response.data.results);
    setUserData(response.data.results); // set user data at every click 
  }).catch((error) => {
      console.log(error); 
      setLoading(true);
  }).finally( () => {
    setLoading(false);
    setActiveUser(true);
  });
  };

 
  return (
      <div className="App">

        <header className="p-5 mb-5 row position-sticky justify-content-center bg-black">
          <div className="col-3">
            <img
              className="w-100 color-invert"
              src="https://i0.wp.com/www.beerleagueheroes.com/wp-content/uploads/2019/04/mystery-person-png-mystery-customer-person-9LKwzI-clipart.png?fit=750%2C481&ssl=1"
              alt="logo" />
          </div>
        </header>

        <div className="container mb-5 column position-sticky justify-content-center">
          <h1> Random User Generator </h1>
          <h2>  React + TypeScript </h2>
        
          <Button isActive={activeUser} clicked={onClickHandler}/>
          
          { loading ? <h3> Loading... </h3>
            : <div className="row">
              {userData.map((user: Iuser, index: number) => {
                return (
                  <Fragment key={index}>
                    {/* <img src={user.picture.large} alt="#"/> looked this data up in console  */}
                    <UserData user={user}/>
                  </Fragment>
                );
              })}
            </div> 
          }
        </div>

        <footer className="row bg-black position-sticky justify-content-center p-5">
          <div className="col-4">
            <a className="text-white" href="https://github.com/gcmo">Github</a>
          </div>
        </footer>

      </div>
  );
}

export default App;



