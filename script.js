const destinations = [
  {
    name: 'Paris, France',
    description: 'Historic boulevards, iconic art, and world-class cuisine in the City of Light.',
    tag: 'Classic',
    country: 'France',
    lat: 48.8566,
    lng: 2.3522,
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
    restaurants: ['Le Jules Verne', 'L’Ambroisie', 'Café de Flore'],
    places: ['Montmartre', 'Seine River Cruise', 'Palace of Versailles'],
  },
  {
    name: 'Kyoto, Japan',
    description: 'Ancient temples, peaceful gardens, and traditional tea houses in historic Kyoto.',
    tag: 'Cultural',
    country: 'Japan',
    lat: 35.0116,
    lng: 135.7681,
    attractions: ['Fushimi Inari Shrine', 'Kinkaku-ji Temple', 'Arashiyama Bamboo Grove'],
    restaurants: ['Kikunoi', 'Gion Karyo', 'Izuju Sushi'],
    places: ['Gion District', 'Philosopher’s Path', 'Nishiki Market'],
  },
  {
    name: 'New York City, USA',
    description: 'Skyline views, theater, and diverse food scenes for an unforgettable city break.',
    tag: 'Urban',
    country: 'USA',
    lat: 40.7128,
    lng: -74.0060,
    attractions: ['Statue of Liberty', 'Central Park', 'Metropolitan Museum of Art'],
    restaurants: ['Le Bernardin', 'Katz’s Delicatessen', 'Momofuku Noodle Bar'],
    places: ['Times Square', 'Brooklyn Bridge', 'High Line'],
  },
  {
    name: 'Rome, Italy',
    description: 'Ancient ruins, vibrant piazzas, and unforgettable Italian flavors.',
    tag: 'Historic',
    country: 'Italy',
    lat: 41.9028,
    lng: 12.4964,
    attractions: ['Colosseum', 'Vatican Museums', 'Pantheon'],
    restaurants: ['Roscioli', 'Trattoria da Enzo', 'Pizzeria Baffetto'],
    places: ['Trevi Fountain', 'Spanish Steps', 'Trastevere'],
  },
  {
    name: 'Sydney, Australia',
    description: 'Harbor highlights, sunny beaches, and iconic coastal scenery.',
    tag: 'Coastal',
    country: 'Australia',
    lat: -33.8688,
    lng: 151.2093,
    attractions: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach'],
    restaurants: ['Quay', 'Aria', 'Icebergs Dining Room'],
    places: ['The Rocks', 'Manly Beach', 'Royal Botanic Garden'],
  },
];

const destinationCards = document.getElementById('destinationCards');
const itineraryList = document.getElementById('itineraryList');
const tripForm = document.getElementById('tripForm');
const tripName = document.getElementById('tripName');
const tripDestination = document.getElementById('tripDestination');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const tripNotes = document.getElementById('tripNotes');
const bookingForm = document.getElementById('bookingForm');
const travelerName = document.getElementById('travelerName');
const travelerEmail = document.getElementById('travelerEmail');
const bookingDestination = document.getElementById('bookingDestination');
const bookingPackage = document.getElementById('bookingPackage');
const travelersCount = document.getElementById('travelersCount');
const bookingNotes = document.getElementById('bookingNotes');
const bookingSummary = document.getElementById('bookingSummary');
const searchInput = document.getElementById('searchInput');
const filterCountry = document.getElementById('filterCountry');
const filterTag = document.getElementById('filterTag');
const budgetForm = document.getElementById('budgetForm');
const budgetTravelers = document.getElementById('budgetTravelers');
const tripDuration = document.getElementById('tripDuration');
const dailyBudget = document.getElementById('dailyBudget');
const budgetResult = document.getElementById('budgetResult');
const favoritesList = document.getElementById('favoritesList');
const packingChecklist = document.getElementById('packingChecklist');
const travelTips = document.getElementById('travelTips');
const bookingModal = document.getElementById('bookingModal');
const openBookingModalBtn = document.getElementById('openBookingModal');
const closeBookingModalBtn = document.getElementById('closeBookingModal');
const cancelBookingModalBtn = document.getElementById('cancelBookingModal');
const travelerPhone = document.getElementById('travelerPhone');
const travelDate = document.getElementById('travelDate');
const bookingDuration = document.getElementById('bookingDuration');

const packingItems = [
  'Passport and travel documents',
  'Travel insurance documents',
  'Hotel reservations',
  'Flight tickets',
  'Credit cards and cash',
  'Phone and chargers',
  'Medications',
  'Toiletries',
  'Comfortable walking shoes',
  'Light jacket',
  'Sunscreen and hat',
  'Adapter for electronics',
  'Travel guide or maps',
  'Camera',
];

const travelTipsData = [
  {
    title: 'Book early',
    description: 'Flights and hotels are often cheaper when booked 2-3 months in advance.',
  },
  {
    title: 'Check visa requirements',
    description: 'Verify visa needs for your destination before booking.',
  },
  {
    title: 'Travel off-season',
    description: 'Visit popular destinations in shoulder season for fewer crowds and better prices.',
  },
  {
    title: 'Learn local phrases',
    description: 'A few words in the local language can enhance your travel experience.',
  },
  {
    title: 'Use public transport',
    description: 'Rely on local buses, trains, and metros to save money and experience the city like locals.',
  },
  {
    title: 'Try local cuisine',
    description: 'Eat where locals eat—street food and small restaurants offer authentic flavors.',
  },
];

function populateFilters() {
  const countries = [...new Set(destinations.map((d) => d.country))];
  const tags = [...new Set(destinations.map((d) => d.tag))];

  filterCountry.innerHTML += countries.map((c) => `<option value="${c}">${c}</option>`).join('');
  filterTag.innerHTML += tags.map((t) => `<option value="${t}">${t}</option>`).join('');
}

function filterDestinations() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCountry = filterCountry.value;
  const selectedTag = filterTag.value;

  const filtered = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm) || 
                          dest.description.toLowerCase().includes(searchTerm);
    const matchesCountry = !selectedCountry || dest.country === selectedCountry;
    const matchesTag = !selectedTag || dest.tag === selectedTag;
    return matchesSearch && matchesCountry && matchesTag;
  });

  destinationCards.innerHTML = filtered
    .map(
      (destination) => `
      <article class="destination-card">
        <div class="tag">${destination.tag}</div>
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
        <div class="destination-meta">
          <strong>Country:</strong> ${destination.country}
        </div>
        <div class="destination-list">
          <strong>Attractions:</strong>
          <ul>${destination.attractions.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="destination-list">
          <strong>Restaurants:</strong>
          <ul>${destination.restaurants.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="destination-list">
          <strong>Places to visit:</strong>
          <ul>${destination.places.map((item) => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="card-actions">
          <button type="button" data-destination="${destination.name}">Choose destination</button>
          <button type="button" data-open-map="${destination.name}">View map</button>
          <button type="button" class="favorite-btn" data-destination="${destination.name}">♡ Favorite</button>
        </div>
      </article>
    `
    )
    .join('');
}

function getFavorites() {
  const favJson = localStorage.getItem('travelPortalFavorites');
  return favJson ? JSON.parse(favJson) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem('travelPortalFavorites', JSON.stringify(favorites));
}

function toggleFavorite(event) {
  const button = event.target.closest('.favorite-btn');
  if (!button) return;

  const destName = button.dataset.destination;
  const favorites = getFavorites();
  const index = favorites.indexOf(destName);

  if (index > -1) {
    favorites.splice(index, 1);
    button.classList.remove('active');
  } else {
    favorites.push(destName);
    button.classList.add('active');
  }

  saveFavorites(favorites);
  renderFavorites();
}

function renderFavorites() {
  const favorites = getFavorites();
  const favoriteDestinations = destinations.filter((d) => favorites.includes(d.name));

  if (favoriteDestinations.length === 0) {
    favoritesList.innerHTML = '<p class="muted-message">No favorites yet. Click the heart icon to add destinations!</p>';
    return;
  }

  favoritesList.innerHTML = favoriteDestinations
    .map(
      (destination) => `
      <article class="destination-card">
        <div class="tag">${destination.tag}</div>
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
        <button type="button" data-destination="${destination.name}">Choose destination</button>
      </article>
    `
    )
    .join('');
}

function calculateBudget(event) {
  const travelers = Number(budgetTravelers.value);
  const days = Number(tripDuration.value);
  const dailyRate = Number(dailyBudget.value);

  const totalBudget = travelers * days * dailyRate;
  const perPersonTotal = days * dailyRate;

  budgetResult.innerHTML = `
    <div class="budget-card">
      <h3>Budget Estimate</h3>
      <p><strong>Total trip cost:</strong> $${totalBudget.toLocaleString()}</p>
      <p><strong>Per person total:</strong> $${perPersonTotal.toLocaleString()}</p>
      <p><strong>Duration:</strong> ${days} days for ${travelers} traveler(s)</p>
      <p class="budget-tip">💡 Tip: Add 10-15% extra for unexpected expenses.</p>
    </div>
  `;
}

function renderPackingChecklist() {
  packingChecklist.innerHTML = `
    <div class="checklist-container">
      ${packingItems
        .map(
          (item, index) => `
        <label class="checklist-item">
          <input type="checkbox" id="item-${index}" />
          <span>${item}</span>
        </label>
      `
        )
        .join('')}
      <button type="button" class="secondary-button" onclick="printChecklist()">Print Checklist</button>
    </div>
  `;
}

function renderTravelTips() {
  travelTips.innerHTML = travelTipsData
    .map(
      (tip) => `
      <article class="tip-card">
        <h3>${tip.title}</h3>
        <p>${tip.description}</p>
      </article>
    `
    )
    .join('');
}

function printChecklist() {
  window.print();
}

function populateDestinationDropdowns() {
  const destinationSelect = document.getElementById('bookingDestination');
  destinationSelect.innerHTML = '<option value="">Select a destination</option>';
  destinationSelect.innerHTML += destinations
    .map((dest) => `<option value="${dest.name}">${dest.name}</option>`)
    .join('');
}

function renderDestinationCards() {
  filterDestinations();
}

function getSavedTrips() {
  const tripsJson = localStorage.getItem('travelPortalTrips');
  return tripsJson ? JSON.parse(tripsJson) : [];
}

function saveTrips(trips) {
  localStorage.setItem('travelPortalTrips', JSON.stringify(trips));
}

function renderItineraryCards() {
  const trips = getSavedTrips();

  if (trips.length === 0) {
    itineraryList.innerHTML = '<p class="muted-message">No itineraries yet. Save one to get started!</p>';
    return;
  }

  itineraryList.innerHTML = trips
    .map(
      (trip, index) => `
      <article class="itinerary-card">
        <div class="tag">${trip.destination}</div>
        <h3>${trip.name}</h3>
        <span>${trip.startDate} → ${trip.endDate}</span>
        <p>${trip.notes || 'No notes added.'}</p>
        <button type="button" data-index="${index}">Delete itinerary</button>
      </article>
    `
    )
    .join('');
}

function addBooking(event) {
  event.preventDefault();

  const booking = {
    travelerName: travelerName.value.trim(),
    travelerEmail: travelerEmail.value.trim(),
    travelerPhone: travelerPhone.value.trim(),
    destination: bookingDestination.value.trim(),
    packageType: bookingPackage.value,
    travelers: Number(travelersCount.value),
    travelDate: travelDate.value,
    duration: Number(bookingDuration.value),
    notes: bookingNotes.value.trim(),
    createdAt: new Date().toLocaleString(),
  };

  if (!booking.travelerName || !booking.travelerEmail || !booking.destination || booking.travelers < 1) {
    alert('Please fill in all required booking fields.');
    return;
  }

  const packagePrices = { standard: 150, comfort: 250, luxury: 400 };
  const totalCost = booking.travelers * booking.duration * packagePrices[booking.packageType];

  booking.totalCost = totalCost;
  // persist booking locally and show
  const bookings = getBookings();
  bookings.unshift(booking);
  saveBookings(bookings);
  renderBookings();
  showBookingSummary(booking);
  bookingForm.reset();
  closeBookingModal();
}

// --- Bookings persistence & UI ---
function getBookings() {
  const raw = localStorage.getItem('travelPortalBookings');
  return raw ? JSON.parse(raw) : [];
}

function saveBookings(items) {
  localStorage.setItem('travelPortalBookings', JSON.stringify(items));
}

function renderBookings() {
  const container = document.getElementById('bookingsList');
  if (!container) return;
  const items = getBookings();
  if (items.length === 0) return (container.innerHTML = '<p class="muted-message">No bookings yet.</p>');
  container.innerHTML = items
    .map(
      (b, i) => `
      <article class="booking-card">
        <div class="booking-small">
          <strong>${b.destination} — ${b.travelDate}</strong>
          <span class="booking-meta">${b.travelers} traveler(s) • ${b.duration} day(s) • ${b.packageType}</span>
          <span class="booking-meta">Booked by: ${b.travelerName} — ${b.travelerEmail}</span>
          <div style="display:flex;gap:8px;margin-top:8px;">
            <button onclick="removeBooking(${i})" class="secondary-button">Cancel</button>
            <button onclick="printBooking(${i})" class="secondary-button">Print</button>
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

function removeBooking(index) {
  const items = getBookings();
  if (!items[index]) return alert('Booking not found');
  if (!confirm('Cancel this booking?')) return;
  items.splice(index, 1);
  saveBookings(items);
  renderBookings();
}

function printBooking(index) {
  const items = getBookings();
  const b = items[index];
  if (!b) return alert('Booking not found');
  const w = window.open('', '_blank');
  w.document.write(`<h2>Booking for ${b.destination}</h2><p>${b.travelerName} — ${b.travelerEmail}</p><p>Date: ${b.travelDate}</p><p>Duration: ${b.duration} day(s)</p><p>Total: $${b.totalCost.toLocaleString()}</p>`);
  w.document.close();
  w.print();
}

function exportBookings() {
  const items = getBookings();
  if (items.length === 0) return alert('No bookings to export');
  const w = window.open('', '_blank');
  w.document.write('<html><head><title>My bookings</title></head><body>');
  w.document.write('<h1>My bookings</h1>');
  items.forEach((b) => {
    w.document.write(`<div style="margin-bottom:18px;"><h3>${b.destination} — ${b.travelDate}</h3><div>${b.travelerName} (${b.travelerEmail})</div><div>${b.travelers} traveler(s) • ${b.duration} day(s)</div><div>Total: $${b.totalCost.toLocaleString()}</div></div>`);
  });
  w.document.write('</body></html>');
  w.document.close();
  w.print();
}

function showBookingSummary(booking) {
  bookingSummary.innerHTML = `
    <article class="booking-card booking-confirmed">
      <div class="booking-icon">✓</div>
      <h3>Booking confirmed!</h3>
      <div class="booking-details">
        <div class="detail-row">
          <span class="label">Traveler:</span>
          <span class="value">${booking.travelerName}</span>
        </div>
        <div class="detail-row">
          <span class="label">Email:</span>
          <span class="value">${booking.travelerEmail}</span>
        </div>
        <div class="detail-row">
          <span class="label">Destination:</span>
          <span class="value">${booking.destination}</span>
        </div>
        <div class="detail-row">
          <span class="label">Travel date:</span>
          <span class="value">${booking.travelDate}</span>
        </div>
        <div class="detail-row">
          <span class="label">Duration:</span>
          <span class="value">${booking.duration} day(s)</span>
        </div>
        <div class="detail-row">
          <span class="label">Package:</span>
          <span class="value">${booking.packageType}</span>
        </div>
        <div class="detail-row">
          <span class="label">Travelers:</span>
          <span class="value">${booking.travelers}</span>
        </div>
        <div class="detail-row highlight">
          <span class="label">Total cost:</span>
          <span class="value">$${booking.totalCost.toLocaleString()}</span>
        </div>
      </div>
      <p class="booking-note">Confirmation email sent to ${booking.travelerEmail}</p>
    </article>
  `;
}

function openBookingModalUI() {
  bookingModal.classList.add('active');
}

function closeBookingModal() {
  bookingModal.classList.remove('active');
}

function addTrip(event) {
  event.preventDefault();

  const trip = {
    name: tripName.value.trim(),
    destination: tripDestination.value.trim(),
    startDate: startDate.value,
    endDate: endDate.value,
    notes: tripNotes.value.trim(),
  };

  if (!trip.name || !trip.destination || !trip.startDate || !trip.endDate) {
    alert('Please fill in all required fields.');
    return;
  }

  const trips = getSavedTrips();
  trips.unshift(trip);
  saveTrips(trips);
  tripForm.reset();
  renderItineraryCards();
}

function handleDestinationChoice(event) {
  const button = event.target.closest('button[data-destination]');
  if (!button) return;

  tripDestination.value = button.dataset.destination;
  const bookingSelect = document.getElementById('bookingDestination');
  if (bookingSelect) bookingSelect.value = button.dataset.destination;
  window.location.hash = '#planner';
  tripName.focus();
}

function handleItineraryActions(event) {
  const button = event.target.closest('button[data-index]');
  if (!button) return;

  const trips = getSavedTrips();
  const index = Number(button.dataset.index);
  trips.splice(index, 1);
  saveTrips(trips);
  renderItineraryCards();
}

tripForm.addEventListener('submit', addTrip);
bookingForm.addEventListener('submit', addBooking);
openBookingModalBtn.addEventListener('click', openBookingModalUI);
closeBookingModalBtn.addEventListener('click', closeBookingModal);
cancelBookingModalBtn.addEventListener('click', closeBookingModal);
bookingModal.addEventListener('click', (e) => {
  if (e.target === bookingModal) closeBookingModal();
});
destinationCards.addEventListener('click', handleDestinationChoice);
destinationCards.addEventListener('click', toggleFavorite);
itineraryList.addEventListener('click', handleItineraryActions);
const closeMapModalBtn = document.getElementById('closeMapModalBtn');
if (closeMapModalBtn) closeMapModalBtn.addEventListener('click', closeMapModal);
searchInput.addEventListener('input', filterDestinations);
filterCountry.addEventListener('change', filterDestinations);
filterTag.addEventListener('change', filterDestinations);
budgetForm.addEventListener('click', (e) => {
  if (e.target.classList.contains('secondary-button')) {
    calculateBudget();
  }
});

// --- Authentication (local demo) ---
function getUsers() {
  const raw = localStorage.getItem('travelPortalUsers');
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users) {
  localStorage.setItem('travelPortalUsers', JSON.stringify(users));
}

function registerUser(event) {
  event.preventDefault();
  const email = document.getElementById('registerEmail').value.trim();
  const name = document.getElementById('registerName').value.trim();
  const password = document.getElementById('registerPassword').value;
  if (!email || !password) return alert('Please provide name, email and password');
  const users = getUsers();
  if (users.find((u) => u.email === email)) return alert('User already exists');
  users.push({ email, name, password: btoa(password) });
  saveUsers(users);
  alert('Registration successful — you can now log in');
  document.getElementById('registerForm').reset();
  closeRegisterModal();
}

function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const users = getUsers();
  const found = users.find((u) => u.email === email && u.password === btoa(password));
  if (!found) return alert('Invalid credentials');
  localStorage.setItem('travelPortalCurrentUser', JSON.stringify(found));
  updateAuthUI();
  closeLoginModal();
}

function logoutUser() {
  localStorage.removeItem('travelPortalCurrentUser');
  updateAuthUI();
}

function getCurrentUser() {
  const raw = localStorage.getItem('travelPortalCurrentUser');
  return raw ? JSON.parse(raw) : null;
}

function updateAuthUI() {
  const user = getCurrentUser();
  const authArea = document.getElementById('authArea');
  if (!authArea) return;
  if (user) {
    authArea.innerHTML = `<span class="user-badge">${user.name || user.email}</span> <button id="logoutBtn" class="btn-secondary">Logout</button>`;
    document.getElementById('logoutBtn').addEventListener('click', logoutUser);
  } else {
    authArea.innerHTML = `<button id="openLogin" class="btn-secondary">Login</button> <button id="openRegister" class="btn-secondary">Register</button>`;
    document.getElementById('openLogin').addEventListener('click', openLoginModal);
    document.getElementById('openRegister').addEventListener('click', openRegisterModal);
  }
}

// --- Map modal (Leaflet) ---
let mapInstance = null;
function openMapModalFor(destinationName) {
  const dest = destinations.find((d) => d.name === destinationName);
  if (!dest) return alert('Coordinates not found for this destination');
  const mapModal = document.getElementById('mapModal');
  const mapTitle = document.getElementById('mapModalTitle');
  mapTitle.textContent = dest.name;
  mapModal.classList.add('active');
  setTimeout(() => {
    if (!mapInstance) {
      mapInstance = L.map('map').setView([dest.lat, dest.lng], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(mapInstance);
      L.marker([dest.lat, dest.lng]).addTo(mapInstance).bindPopup(dest.name).openPopup();
    } else {
      mapInstance.setView([dest.lat, dest.lng], 12);
      L.marker([dest.lat, dest.lng]).addTo(mapInstance).bindPopup(dest.name).openPopup();
    }
  }, 160);
}

function closeMapModal() {
  const mapModal = document.getElementById('mapModal');
  mapModal.classList.remove('active');
}

// --- Group travel planning ---
function getGroups() {
  const raw = localStorage.getItem('travelPortalGroups');
  return raw ? JSON.parse(raw) : [];
}

function saveGroups(groups) {
  localStorage.setItem('travelPortalGroups', JSON.stringify(groups));
}

function createGroup(event) {
  event.preventDefault();
  const title = document.getElementById('groupTitle').value.trim();
  const destination = document.getElementById('groupDestination').value.trim();
  if (!title || !destination) return alert('Please provide title and destination');
  const groups = getGroups();
  const id = 'grp-' + Date.now().toString(36);
  groups.push({ id, title, destination, members: [] });
  saveGroups(groups);
  document.getElementById('groupForm').reset();
  renderGroups();
  navigator.clipboard && navigator.clipboard.writeText(id);
  alert('Group created. ID copied to clipboard: ' + id);
}

function joinGroupById() {
  const id = prompt('Enter group ID to join:');
  if (!id) return;
  const groups = getGroups();
  const g = groups.find((x) => x.id === id);
  if (!g) return alert('Group not found');
  const user = getCurrentUser();
  const name = user ? user.name || user.email : prompt('Your name:');
  g.members.push({ name, joinedAt: new Date().toLocaleString() });
  saveGroups(groups);
  renderGroups();
  alert('Joined group');
}

function renderGroups() {
  const container = document.getElementById('groupsList');
  const groups = getGroups();
  if (!container) return;
  if (groups.length === 0) return (container.innerHTML = '<p class="muted-message">No groups yet.</p>');
  container.innerHTML = groups
    .map(
      (g) => `
      <article class="destination-card">
        <div class="tag">Group</div>
        <h3>${g.title}</h3>
        <p>Destination: ${g.destination}</p>
        <p>Members: ${g.members.length}</p>
        <div class="card-actions">
          <button type="button" onclick="promptCopyGroup('${g.id}')">Copy ID</button>
          <button type="button" onclick="openGroupDetails('${g.id}')">View</button>
        </div>
      </article>
    `
    )
    .join('');
}

function promptCopyGroup(id) {
  navigator.clipboard && navigator.clipboard.writeText(id);
  alert('Group id copied: ' + id);
}

function openGroupDetails(id) {
  const groups = getGroups();
  const g = groups.find((x) => x.id === id);
  if (!g) return alert('Group not found');
  const details = `Group: ${g.title}\nDestination: ${g.destination}\nMembers:\n${g.members.map((m) => '- ' + m.name).join('\n')}`;
  alert(details);
}

// --- Emergency info ---
const emergencyNumbers = {
  France: '112',
  Japan: '119',
  USA: '911',
  Italy: '112',
  Australia: '000',
};

function showEmergencyInfo() {
  const out = document.getElementById('emergencyPanel');
  out.innerHTML = `
    <div class="booking-card">
      <h3>Emergency contacts</h3>
      <p>International emergency: <strong>112</strong></p>
      <ul>
        ${Object.keys(emergencyNumbers)
          .map((c) => `<li>${c}: <strong>${emergencyNumbers[c]}</strong></li>`)
          .join('')}
      </ul>
      <p>If you're logged in, you can print a personal emergency card with your details.</p>
    </div>
  `;
}

function showLocalEmergencyByGeolocation() {
  if (!navigator.geolocation) return alert('Geolocation not supported');
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      // find nearest destination by distance
      let best = null;
      let bestD = Infinity;
      destinations.forEach((d) => {
        if (!d.lat || !d.lng) return;
        const dx = d.lat - latitude;
        const dy = d.lng - longitude;
        const dist = dx * dx + dy * dy;
        if (dist < bestD) {
          bestD = dist;
          best = d;
        }
      });
      if (best && emergencyNumbers[best.country]) {
        alert(`Nearest country detected: ${best.country} — emergency: ${emergencyNumbers[best.country]}`);
      } else {
        alert('Could not determine local emergency number. Use international: 112');
      }
    },
    () => alert('Unable to determine location')
  );
}

// attach auth modal handlers
function openLoginModal() {
  document.getElementById('loginModal').classList.add('active');
}
function closeLoginModal() {
  document.getElementById('loginModal').classList.remove('active');
}
function openRegisterModal() {
  document.getElementById('registerModal').classList.add('active');
}
function closeRegisterModal() {
  document.getElementById('registerModal').classList.remove('active');
}

// Initialize auth UI and listeners
document.addEventListener('click', (e) => {
  if (e.target && e.target.matches && e.target.matches('[data-open-map]')) {
    openMapModalFor(e.target.dataset.openMap);
  }
});

populateFilters();
populateDestinationDropdowns();
renderDestinationCards();
renderItineraryCards();
renderFavorites();
renderPackingChecklist();
renderTravelTips();
renderGroups();
updateAuthUI();
// render bookings and wire export
renderBookings();
const exportBtn = document.getElementById('exportBookingsBtn');
if (exportBtn) exportBtn.addEventListener('click', exportBookings);

// Theme toggle init
function applySavedTheme() {
  const t = localStorage.getItem('travelPortalTheme');
  const btn = document.getElementById('themeToggle');
  if (t === 'light') {
    document.body.classList.add('light');
    if (btn) btn.textContent = '🌞';
  } else {
    document.body.classList.remove('light');
    if (btn) btn.textContent = '🌙';
  }
}

function toggleTheme() {
  const btn = document.getElementById('themeToggle');
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('travelPortalTheme', isLight ? 'light' : 'dark');
  if (btn) btn.textContent = isLight ? '🌞' : '🌙';
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
applySavedTheme();
