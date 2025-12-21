const navElement = document.getElementById('nav');

navElement.innerHTML = `
<div>
    <nav>
        <a class="logo logo-mobile" href="index.html" aria-label="TekkyFutbol Home">
        <img src="images/logo.webp" alt="TekkyFutbol Logo"></a>
        <!-- Menu Toggler -->
        <button type="button" class="menu-toggler">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="menu-toggler-open">
            <path d="M3 5h18" />
            <path d="M3 12h18" />
            <path d="M3 19h18" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="menu-toggler-close">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div class="nav-links">
          <ul>
            <li>
               <a href="index.html">Home</a>
            </li>
            <li class="dropdown-menu">
              <div class="nav-dropdown-trigger">
                <span>Shop</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z" />
                </svg>
              </div>
              <!-- dropdown -->
              <div class="nav-links-dropdown">
                <ul>
                  <li>
                    <a href="Shop.html">Merchandise</a>
                  </li>
                  <li>
                    <a href="Season-pass-checkout.html">Season Pass</a>
                  </li>
                  <li>
                    <a href="supporter-bundle-checkout.html">Supporter Bundle</a>
                  </li>
                  <li>
                    <a href="Playoff-ticket-checkout.html">Playoff Ticket</a>
                  </li>
                  <li>
                    <div class="coming-soon nav-link">Finale Ticket</div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="dropdown-menu">
              <div class="nav-dropdown-trigger">
                <span>
                  Schedule
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z" />
                </svg>
              </div>
              <!-- dropdown -->
              <div class="nav-links-dropdown">
                <ul>
                  <li>
                    <a href="League-schedule.html">League Schedule</a>
                  </li>
                  <li>
                    <a href="Results.html">Results</a>
                  </li>
                  <li>
                      <a href="Standings.html">Standings</a>
                  </li>
                  <li>
                    <a href="Next.html">Next Fixtures</a>
                  </li>
                  <li>
                    <div class="coming-soon nav-link">Past Matchdays</div>
                  </li>
                </ul>
              </div>
            </li>
          
            <li class="dropdown-menu">
              <div class="nav-dropdown-trigger">
                <span>About</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z" />
                </svg>
              </div>
              <!-- dropdown -->
              <div class="nav-links-dropdown">
                <ul>
                  <li>
                    <a href="About.html">About TekkyFutbol</a>
                  </li>
                  <li>
                    <a href="Rules.html">Rules</a>
                  </li>
                  <li>
                    <a href="Staff.html">Staff & Volunteers</a>
                  </li>
                  <li>
                    <div class="coming-soon nav-link">Hall of Fame</div>
                  </li>
                </ul>
              </div>
            </li>
            
             <li class="logo-desktop">
              <a class="logo" href="index.html" aria-label="TekkyFutbol Home">
                <img src="images/logo.webp" alt="TekkyFutbol Logo">
              </a>
            </li>
            
            <li>
              <a href="Partners.html">Partners</a>
            </li>
            <li>
              <a href="registration.html">Register</a>
            </li>
            <li>
              <a href="Season-Finale.html">Finale</a>
            </li>
             <li>
              <a href="Contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div class="coming-soon-overlay">
        <div class="overlay-content">
          <h3>Coming Soon</h3>
          <button class="close-overlay">Close</button>
        </div>
      </div>
  </div>
`


// Handle overlay popup for Media & Highlights option
const comingSoonElements = document.querySelectorAll('.coming-soon');
const mediaOverlay = document.querySelector('.coming-soon-overlay');
const closeMediaOverlay = document.querySelector('.close-overlay');
comingSoonElements.forEach((ele) => {
    ele.addEventListener('click', () => { mediaOverlay.style.display = 'flex'; });
})
closeMediaOverlay.addEventListener('click', () => { mediaOverlay.style.display = 'none'; });

// Open navbar mobile
const menuTogglerBtn = document.querySelector('.menu-toggler');
if (menuTogglerBtn) {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    menuTogglerBtn.addEventListener('click', () => {
        menuTogglerBtn.classList.toggle('active');
        nav.style.background = 'black';

        const isOpen = navLinks.classList.toggle('active');
        if (!isOpen) {
            nav.style.background = 'rgba(0,0,0,0.65)';
            document.querySelectorAll('.dropdown-menu.active')
                .forEach(item => item.classList.remove('active'));
        }
    })
}

// Open dropdown menu on mobile
document.querySelectorAll('.dropdown-menu > .nav-dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
        e.preventDefault();

        const parent = this.closest('.dropdown-menu');

        document.querySelectorAll('.dropdown-menu.active').forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
            }
        });

        parent.classList.toggle('active');
    });
});

