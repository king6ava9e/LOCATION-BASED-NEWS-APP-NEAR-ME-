// using url params to get my info
const results = document.getElementById("results-info");
const myInfo = new URLSearchParams(window.location.search);
// console.log(myInfo);

const firstName = myInfo.get("firstname");
const country = myInfo.get("country");

results.innerHTML = `<p>Welcome ${firstName}!</P>
Explore the best of News from ${country}

`;
