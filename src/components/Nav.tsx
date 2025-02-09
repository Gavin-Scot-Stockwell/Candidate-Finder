import { Link, useLocation } from "react-router-dom";
//import style from "../style/navStyle";


function NavTabs() {
  const currentPages = useLocation().pathname;

  return (//style={moreStyle.placement}
    <header  className="nav nav-tabs">
      <nav className="nav-item" >
        <Link
          to="/"
          className={currentPages === "/" ? "nav-link active" : "nav-link"}
        >
          Candidate Search
        </Link>
      </nav>
      <nav className="nav-item" >
        <Link
          to="/SavedCandidates"
          className={
            currentPages === "/SavedCandidates" ? "nav-link active" : "nav-link"
          }
        >
          Saved Candidates
        </Link>
      </nav>
      <nav className="nav-item" >
        <Link
          to="/SavedCandidates"
          className={
            currentPages === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          
        </Link>
      </nav>
      <nav className="nav-item" >
        <Link
          to="/contact"
          className={
            currentPages === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          
        </Link>
      </nav>
      <nav className="nav-item" >
        <Link
          to="/resume"
          className={
            currentPages === "/resume" ? "nav-link active" : "nav-link"
          }
        >
          
        </Link>
      </nav>
    </header>
  );
}

export default NavTabs;
