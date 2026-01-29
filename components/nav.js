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
<!--            <li>-->
<!--               <a href="index.html">Home</a>-->
<!--            </li>-->
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
                    <a href="Single-ticket-checkout.html">Single Ticket</a>
                  </li>
<!--                  <li>-->
<!--                    <div class="coming-soon nav-link">Finale Ticket</div>-->
<!--                  </li>-->
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
<!--                  <li>-->
<!--                    <div class="coming-soon nav-link">Past Matchdays</div>-->
<!--                  </li>-->
                </ul>
              </div>
            </li>
            
            <li>
                <div class="coming-soon-teams nav-link">Teams</div>
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
                    <div class="coming-soon-hof nav-link">Hall of Fame</div>
                  </li>
                </ul>
              </div>
            </li>
            
            <li>
               <a href="Venues.html">Venues</a>
            </li>
            
             <li class="logo-desktop">
              <a class="logo" href="index.html" aria-label="TekkyFutbol Home">
                <img src="images/logo.webp" alt="TekkyFutbol Logo">
              </a>
            </li>
            <li class="dropdown-menu">
              <div class="nav-dropdown-trigger">
                <span>Partners</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M18.53 9.53a.75.75 0 0 0 0-1.06H5.47a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0z" />
                </svg>
              </div>
              <!-- dropdown -->
              <div class="nav-links-dropdown">
                <ul>
                  <li>
                    <a href="Partners.html">Partner with TekkyFutbol</a>
                  </li>
                  <li>
                    <a href="Partnership-Inquiry.html">Partnership Inquiry</a>
                  </li>
                  <li>
                    <a href="Partnership-Deck.html">Request partnership deck</a>
                  </li>
                </ul>
              </div>
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
      
    <div id="hallOfFamePopup" class="coming-soon-overlay">
        <div class="overlay-content">
          <h3>The Hall of Fame Is Coming</h3>
          <p>Celebrate the players, moments, and legacy that define TekkyFutbol. Be the first to know when the Hall of Fame officially opens</p>
          <form id="futureUpdatesForm">
                <input type="text" id="name" name="name" placeholder="Enter your name" required>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                <button type="button" class="cta close-overlay open-hof-success">Enter the legacy</button>
          </form>
          
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="cross-icon"
              style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024"
              version="1.1"
          >
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/>
          </svg>
        </div>
    </div>
    
    <div id="successHallOfFamePopup" class="coming-soon-overlay">
        <div class="overlay-content">
          <h3>You’re Part of the Legacy</h3>
          <p class="subtext">You’ll be notified when the Hall of Fame goes live and new inductions are revealed.</p>
          <button class="cta close-overlay close-success-popup">Explore the League</button>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="cross-icon"
              style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024"
              version="1.1"
          >
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/>
          </svg>
        </div>
    </div>
    
    <div id="teamsPopup" class="coming-soon-overlay">
        <div class="overlay-content">
          <h3>Teams Are Forming</h3>
          <p>Registered teams will be revealed before the season begins. Join the list to be notified when lineups, names, and rivalries go live.</p>
          <form id="futureUpdatesForm">
                <input type="text" id="name" name="name" placeholder="Enter your name" required>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                <button type="button" class="cta close-overlay open-teams-success">Notify Me</button>
          </form>
          
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="cross-icon"
              style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024"
              version="1.1"
          >
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/>
          </svg>
        </div>
    </div>
    
    <div id="successTeamsPopup" class="coming-soon-overlay">
        <div class="overlay-content">
          <h3>You’re In</h3>
          <p class="subtext">You’ll be notified as soon as teams are revealed. This is where the stories begin.</p>
          <button class="cta close-overlay close-teams-success-popup">Explore the League</button>

          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="cross-icon"
              style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024"
              version="1.1"
          >
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/>
          </svg>
        </div>
    </div>
    
    <div id="comingSoonPopup" class="coming-soon-overlay">
        <div class="overlay-content">
          <h3>Coming Soon</h3>
          <button class="close-overlay">Close</button>
          
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="cross-icon"
              style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024"
              version="1.1"
          >
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/>
          </svg>
        </div>
    </div>
  </div>
`


// Handle overlay popup for Media & Highlights option
const comingSoonElements = document.querySelectorAll('.coming-soon');
const comingSoonGlobalPopup = document.getElementById('comingSoonPopup');
const closeMediaOverlay = document.querySelector('#comingSoonPopup .close-overlay');

comingSoonElements.forEach((ele) => {
    ele.addEventListener('click', () => {
        comingSoonGlobalPopup.style.display = 'flex';
    });
})
closeMediaOverlay.addEventListener('click', () => {
    comingSoonGlobalPopup.style.display = 'none';
});

// Triggers
const comingSoonHOFTrigger = document.querySelector('.coming-soon-hof');
const comingSoonTeamsTrigger = document.querySelector('.coming-soon-teams');
const hallOfFameSuccessTrigger = document.querySelector('.open-hof-success');
const teamsSuccessTrigger = document.querySelector('.open-teams-success');
const closeHofSuccessTrigger = document.querySelector('.close-success-popup');
const closeTeamsSuccessTrigger = document.querySelector('.close-teams-success-popup');

// Popups
const hofPopup = document.getElementById('hallOfFamePopup')
const successHofPopup = document.getElementById('successHallOfFamePopup');
const teamsPopup = document.getElementById('teamsPopup')
const successTeamsPopup = document.getElementById('successTeamsPopup');

comingSoonHOFTrigger.addEventListener('click', () => {
    hofPopup.style.display = 'flex';
});
comingSoonTeamsTrigger.addEventListener('click', () => {
    teamsPopup.style.display = 'flex';
});

hallOfFameSuccessTrigger.addEventListener('click', () => {
    successHofPopup.style.display = 'flex';
    hofPopup.style.display = 'none';
});
teamsSuccessTrigger.addEventListener('click', () => {
    successTeamsPopup.style.display = 'flex';
    teamsPopup.style.display = 'none';
});

closeHofSuccessTrigger.addEventListener('click', () => {
    successHofPopup.style.display = 'none';
});
closeTeamsSuccessTrigger.addEventListener('click', () => {
    successTeamsPopup.style.display = 'none';
});

const closePopups = document.querySelectorAll('.cross-icon');
closePopups.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.closest('.coming-soon-overlay').style.display = 'none';
    });
});

// Close buttons
const closeIcons = document.querySelectorAll('.cross-icon');

/* Close any popup */
closeIcons.forEach(icon => {
    icon.addEventListener('click', () => icon.closest('.coming-soon-overlay').style.display = 'none');
});


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


/**
 * Resets the navigation to its closed state.
 * This ensures that back/forward navigation doesn't leave
 * menus or dropdowns hanging open.
 */
function closeAllNavStates() {
    console.log('closing')
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const menuTogglerBtn = document.querySelector('.menu-toggler');
    const activeDropdowns = document.querySelectorAll('.dropdown-menu.active');

    activeDropdowns.forEach(item => item.classList.remove('active'));

    if (navLinks) navLinks.classList.remove('active');

    if (menuTogglerBtn) menuTogglerBtn.classList.remove('active');

    if (nav) nav.style.background = 'rgba(0,0,0,0.65)';
}

// Handle the browser "Back" and "Forward" buttons
window.addEventListener('popstate', closeAllNavStates);

// Handle cases where the browser loads the page from cache (BFcache)
window.addEventListener('pageshow', (event) => {
    closeAllNavStates();
});


    // Clear a single form
    function clearForm(form) {
        if (!form) return;
        form.reset();
    }

    // Clear form on submit button click
    // document.addEventListener('click', function (e) {
    //         const btn = e.target.closest('button');
    //         if (!btn || window.location.pathname.includes('Contact.html')) return;
    //
    //         const form = btn.closest('form');
    //         if (form) {
    //         clearForm(form);
    //     }
    // });

    // Clear forms when popup closes
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.cross-icon')) return;

        const popup = e.target.closest('.overlay-content');
        if (!popup) return;

        const forms = popup.querySelectorAll('form');
        forms.forEach(form => clearForm(form));
    });
