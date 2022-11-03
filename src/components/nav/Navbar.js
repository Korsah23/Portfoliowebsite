import "./navbar.css";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUserAdd,
  AiFillCustomerService,
} from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
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
      <a href="#portfolio">
        <FcBusinessman />
      </a>
    </nav>
  );
}
