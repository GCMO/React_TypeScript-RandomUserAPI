import {FC} from 'react';

interface Ibutton {
  isActive: boolean;
  clicked: () => void;
}

const Button:FC<Ibutton> = ({ isActive, clicked }) => {
  return (
  <div className="d-flex justify-content-center">
    <button className="
      p-3 col-4 row position-sticky justify-content-center" 
      type="submit"
      onClick={clicked} 
    > {isActive ? "Get Another User" : "Get User"} </button>
  </div>
  );
};

export default Button;
