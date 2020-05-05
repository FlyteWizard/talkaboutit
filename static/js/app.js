// displayTweets
const displayTweets = (results) => {
  // If nothing matches show a retry button
  // Else show tweets
  if (results.tweets.length === 0) {
    // Create div
    let div = document.createElement("div");
    // Assign div a Class
    div.className = "col-sm-12";

    // Populate div contents
    div.innerHTML =
      '<h3>Nothing Matches the Searched Term</h3>\
      <a href="/" class="btn btn-outline-info">Try Something Else</a>';

    // Append to tweets section
    document.getElementById("tweets").appendChild(div);
  } else {
    // For each result
    for (let i = 0; i < results.tweets.length; i++) {
      // Create div
      let div = document.createElement("div");
      // Assign div a Class
      div.className = "col-sm-12";

      // Populate div contents
      div.innerHTML = 
        '<div class="card border-dark">\
          <div class="card-header text-white bg-dark">\
            ' + results.tweets[i].name + '\
          </div >\
          <div class="card-body">\
            <h5 class="card-title">' + results.tweets[i].created_at + '</h5>\
            <p class="card-text">' + results.tweets[i].full_text + '</p>\
            <a target="_blank" href="https://twitter.com/' + results.tweets[i].screen_name + '/status/' + results.tweets[i].id_str + '" class="btn btn-outline-info">View Tweet</a>\
          </div>\
        </div>';
      
        // Append to tweets section
      document.getElementById("tweets").appendChild(div);
    }
  }
}

// searchTalks
const searchTalks = (searchTerm, resultType, latitude, longitude, radius) => {
  // Set searchTerm to the searchTerm
  document.getElementById("searchedTerm").innerText = searchTerm;

  // search
  const search = {
    search: searchTerm,
    type: resultType,
    lat: latitude,
    long: longitude,
    rad: radius
  };

  // options
  const options = {
    method: "POST",
    body: JSON.stringify(search),
    headers: {
      "Content-Type": "application/json"
    }
  }

  // Fetch to /search
  fetch("/search", options)
    .then((response) => response.json())
    .then((data) => {
      displayTweets(data);
    })
    .catch(error => console.error("😭 Error:", error));
}

// search
const search = () => {
  // Get values for searchTerm, resultType, latitude, longitude, and redius
  let searchTerm = sessionStorage.getItem("searchTerm");
  let resultType = sessionStorage.getItem("resultType");
  let latitude = sessionStorage.getItem("latitude");
  let longitude = sessionStorage.getItem("longitude");
  let radius = sessionStorage.getItem("radius");

  // searchTalks
  searchTalks(searchTerm, resultType, latitude, longitude, radius);
}

// changeToTweetsPage
const changeToTweetsPage = () => {
  // Change URL to /tweets
  window.location = "tweets";
}

// setSearchTerm
const setSearchTerm = () => {
  // Prevent page from refreshing
  event.preventDefault();

  // Clear searchTerm, resultType, latitude, longitude, and radius
  sessionStorage.removeItem("searchTerm");
  sessionStorage.removeItem("resultType");
  sessionStorage.removeItem("latitude");
  sessionStorage.removeItem("longitude");
  sessionStorage.removeItem("radius");

  // Get values for searchTerm, resultType, latitude, longitude, and radius
  let searchTerm = document.getElementById("searchTerm").value;
  let type = document.getElementById("resultType").options[resultType.selectedIndex].value;
  let latitude = document.getElementById("latitude").value;
  let longitude = document.getElementById("longitude").value;
  let radius = document.getElementById("radius").value;

  // Set searchTerm, resultType, latitude, longitude, and radius
  sessionStorage.setItem("searchTerm", searchTerm);
  sessionStorage.setItem("resultType", type);
  sessionStorage.setItem("latitude", latitude);
  sessionStorage.setItem("longitude", longitude);
  sessionStorage.setItem("radius", radius);

  // Fresh Search
  document.getElementById("searchTerm").value = "";
  document.getElementById("latitude").value = "";
  document.getElementById("longitude").value = "";
  document.getElementById("radius").value = "";

  // changeToTweetsPage
  changeToTweetsPage();
}

// Check if the element exists
let searchTermExist = document.getElementById("searchTerm");
let latitudeExist = document.getElementById("latitude");
let longitudeExist = document.getElementById("longitude");
let radiusExist = document.getElementById("radius");

// If it exists
if (searchTermExist && latitudeExist && longitudeExist && radiusExist) {
  // Fresh Search
  document.getElementById("searchTerm").value = "";
  document.getElementById("latitude").value = "";
  document.getElementById("longitude").value = "";
  document.getElementById("radius").value = "";
}