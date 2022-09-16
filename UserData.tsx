import {FC} from 'react';

interface IuserData {
  user: any; 
}

const UserData:FC<IuserData> = ({ user }) => {

  const data = [` ${user.name.first} ${user.name.last}`, ` age ${user.dob.age},`, ` living in ${user.location.city}`];

  return (
  <div className="mx-5 col-10 d-flex justify-content-center">
    <h1> {data} </h1>
  </div>
  );

};

export default UserData;

