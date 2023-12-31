
function Header() {
    return (
      <div>
        <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <div class="logo">
        <h1><a href="index.html">Vesperr</a></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="homehero">Home</a></li>
          <li><a class="nav-link scrollto" href="homeabout">About</a></li>
          <li><a class="nav-link scrollto" href="homeservices">Services</a></li>
          <li><a class="nav-link scrollto " href="homeportfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="hometeam">Team</a></li>
          <li><a class="nav-link scrollto" href="homepricing">Pricing</a></li>
          <li class="dropdown"><a href="home"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="home">Drop Down 1</a></li>
              <li class="dropdown"><a href="home"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="home">Deep Drop Down 1</a></li>
                  <li><a href="home">Deep Drop Down 2</a></li>
                  <li><a href="home">Deep Drop Down 3</a></li>
                  <li><a href="home">Deep Drop Down 4</a></li>
                  <li><a href="home">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="home">Drop Down 2</a></li>
              <li><a href="home">Drop Down 3</a></li>
              <li><a href="home">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="homecontact">Contact</a></li>
          <li><a class="getstarted scrollto" href="homeabout">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
      </div>
    );
  }
  
  export default Header;