
const Navbar = () => {
  return (
    <>
     <header>
     <nav className="navbar navbar-expand-lg px-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{`<Simran/>`}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#skill">Skills</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link px-3" href="#experience">Experience</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link px-3" href="#education">Education</a>
        </li>
       
       
        <li className="nav-item">
          <a className="nav-link px-3" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
     </header>
    </>
  );
};

export default Navbar;
