import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <header className={classes.navbar}>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
