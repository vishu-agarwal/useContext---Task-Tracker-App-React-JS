import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy; <a href="#">AgarwalVishakha</a>(2021)
      </p>
      <Link to="/about">About</Link>
    </footer>
  );
}
