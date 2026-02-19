// hamburger
const navButton = document.getElementById("hamburger-button");
const navBar = document.getElementById("nav-bar");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("show");
  navBar.classList.toggle("show");
});

// ----- CONFIG -----
const geoApiKey = "d92430836eaa4bb4a6909d8e5f7d14f2";
const newsApiKey = "3411b37a-4419-4f6e-80db-17bc2287951a";

// ----- FETCH GEOLOCATION -----
async function getLocation() {
  try {
    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${geoApiKey}`,
    );
    if (!response.ok) throw new Error("Geolocation fetch failed");

    const locationData = await response.json();
    console.log("Geolocation Data:", locationData);

    displayCountry(locationData);
  } catch (error) {
    console.error("Error fetching geolocation:", error);
  }
}

// ----- FETCH NEWS -----
async function getNews() {
  try {
    const response = await fetch(
      `https://content.guardianapis.com/search?api-key=${newsApiKey}`,
    );

    if (!response.ok) throw new Error(`News fetch failed: ${response.status}`);

    const newsData = await response.json();
    console.log("All News Data:", newsData);

    displayNews(newsData);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

// Call the functions
getNews();
getLocation();

// getting current year
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.innerHTML = currentYear;

// ----- DISPLAY GEOLOCATION -----
// const locationInfo = document.getElementById("location-info");

// function displayCountry(locationData) {
//     const country = document.getElementById("country-name");
//     country.innerText = locationData.city;
// }

// ----- DISPLAY GEOLOCATION -----
const locationInfo = document.getElementById("location-info");

function displayCountry(locationData) {
  // Remove previous card if any
  locationInfo.innerHTML = "";

  // Create a new card
  const card = document.createElement("div");
  card.classList.add("location-card");

  card.innerHTML = `
        <h2>Hello and welcome from ${locationData.country_name_official || locationData.country_name} 
        (${locationData.country_name}) ${locationData.country_emoji}</h2>

        <p>
            Broadcasting from the capital city of <strong>${locationData.country_capital}</strong>,
            ${locationData.state_prov || ""} ${locationData.district ? "" + locationData.district : ""},
            ${locationData.continent_name}.
        </p>

        <p>
            Stay updated with the latest headlines, all curated for you for 0 <strong>${locationData.currency.code}</strong>.
        </p>
    `;

  locationInfo.appendChild(card);
}

// ----- DISPLAY NEWS -----
const newsContainer = document.getElementById("news-update");

function displayNews(newsData) {
  // Clear previous content to prevent any errors
  newsContainer.innerHTML = "";

  // Loop through news results as learnt from wdd231
  newsData.response.results.forEach((article, index) => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.style.animationDelay = `${index * 100}ms`; // staggered animation copied from stackoverflow

    const date = new Date(article.webPublicationDate);
    const formattedDate = date.toLocaleString();

    card.innerHTML = `
            <h3>${article.webTitle}</h3>
            <p><strong>Section:</strong> ${article.sectionName}</p>
            <p><strong>Type:</strong> ${article.type}</p>
            <p><strong>Published:</strong> ${formattedDate}</p>
            <a href="${article.webUrl}" target="_blank">Read More</a>
        `;

    newsContainer.appendChild(card);
  });
}
