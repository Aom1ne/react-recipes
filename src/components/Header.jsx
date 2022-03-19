import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="grey darken-4">
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
          React Recipes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/Aom1ne"
            >
              Repository
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
