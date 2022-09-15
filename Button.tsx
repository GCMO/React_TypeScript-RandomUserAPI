import {FC} from 'react';

interface Ibutton {
  isActive: boolean;
  clicked: () => void;
}

const Button:FC<Ibutton> = ({ isActive, clicked }) => {
  return (
  <div>
    <button className="
      p-3 mb-5 row position-sticky justify-content-center" 
      type="submit"
      onClick={clicked} 
    > {isActive ? "Get Another User" : "Get User"} </button>
  </div>
  );
};

export default Button;
