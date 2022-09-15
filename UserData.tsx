import {FC} from 'react';

interface IuserData {
  user: any; 
}

const UserData:FC<IuserData> = ({ user }) => {

  const data = [` ${user.name.first} ${user.name.last}`, ` age ${user.dob.age},`, ` living in ${user.location.city}`];

  return (
  <div className="d-flex">
    <p> {data}</p>
  </div>
  );

};

export default UserData;