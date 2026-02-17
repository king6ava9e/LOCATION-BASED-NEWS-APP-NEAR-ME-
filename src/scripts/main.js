// hamburger
const navButton = document.getElementById("hamburger-button");
const navBar = document.getElementById("nav-bar");

// toggle the show class on and off
navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navBar.classList.toggle("show");
})


// working with the apis
// ----- CONFIG -----
const geoApiKey = "d92430836eaa4bb4a6909d8e5f7d14f2";  // replace with your key
const newsApiKey = "981c797dbefcb3003deb1f5ac3547a1c";    // replace with your key

// ----- FETCH GEOLOCATION -----
async function getLocation() {
    try {
        const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${geoApiKey}`);
        if (!response.ok) throw new Error("Geolocation fetch failed");
        const data = await response.json();
        console.log("Geolocation Data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching geolocation:", error);
    }
}

// ----- FETCH NEWS -----
// async function getNews(countryCode) {
//     try {
//         // MediaStack allows filtering by country code, language, etc.
//         const response = await fetch(`https://api.mediastack.com/v1/news?access_key=${newsApiKey}&countries=${countryCode}`);
//         if (!response.ok) throw new Error("News fetch failed");
//         const data = await response.json();
//         console.log("News Data:", data);
//     } catch (error) {
//         console.error("Error fetching news:", error);
//     }
// }
async function getNews() {
    try {
        // Base URL without country filter for general/global news
        const response = await fetch(`https://api.mediastack.com/v1/news?access_key=${newsApiKey}&languages=en`);

        if (!response.ok) throw new Error(`News fetch failed: ${response.status}`);

        const data = await response.json();
        console.log("All News Data:", data);

        // Optional: preview first few articles
        if (data.data && data.data.length > 0) {
            data.data.slice(0, 5).forEach((article, index) => {
                console.log(`${index + 1}. ${article.title} (${article.source})`);
            });
        }
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Call the function
getNews();


// ----- MAIN -----
async function init() {
    const location = await getLocation();
    // if (location && location.country_code2) {
    //     await getNews(location.country_code2);
    // }
}

init();
