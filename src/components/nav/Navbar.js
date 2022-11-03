import "./navbar.css";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUserAdd,
  AiFillCustomerService,
} from "react-icons/ai";


export default function Navbar() {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#contact">
        <AiOutlineContacts />
      </a>
      <a href="#experience">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUserAdd />
      </a>
      <a href="#services">
        <AiFillCustomerService />
      </a>
     
    </nav>
  );
}
