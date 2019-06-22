// displayTweets
const displayTweets = (results) => {
  // If nothing matches show a retry button
  // Else show tweets
  if(results.tweets.length === 0) {
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
    for(let i = 0; i < results.tweets.length; i++) {
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
const searchTalks = (searchTerm) => {
  // Set searchTerm to the searchTerm
  document.getElementById("searchedTerm").innerHTML = searchTerm;

  // Create the query
  let query = "search=" + searchTerm;

  // Get -> /search
  return fetch("search?" + query, {
    method: "GET"
  })
  .then(response => response.json())
  .then(function(data) {
    // displayTweets
    displayTweets(data);
  })
  .catch(error => console.error('😭 Error:', error));
}

// search
const search = () => {
  // searchTalks
  searchTalks(sessionStorage.getItem('searchTerm'));
}

// changeToTweetsPage
const changeToTweetsPage = () => {
  // Change URL to /tweets
  window.location = "tweets";
}

// setSearchTerm
const setSearchTerm = () => {
  if(document.getElementById("searchTerm").value !== "") {
    // Clear searchTerm
    sessionStorage.removeItem('searchTerm');

    // Get value
    let searchTerm = document.getElementById("searchTerm").value;
    // Set searchTerm
    sessionStorage.setItem('searchTerm', searchTerm);

    // Fresh Search
    document.getElementById("searchTerm").value = "";
    
    // changeToTweetsPage
    changeToTweetsPage();
  } else {
    console.log("😭 Search cannot be empty.")
  }
}

// disableButtonToggle
const disableButtonToggle = () => {
  // Get buttons from the page
  let buttons = document.getElementsByClassName("btn");

  // If nothing in input field disable button
  // Else undisable
  if(document.getElementById("searchTerm").value === "") {
    for(let i = 0; i < buttons.length; i++) {
      // Sets buttons to disabled
      buttons[i].disabled = true;
    }
  } else {
    for(let i = 0; i < buttons.length; i++) {
      // Set buttons to undisabled
      buttons[i].disabled = false;
    }
  }
}

// Check if the element exists
let searchTermExist = document.getElementById("searchTerm");

// If it exists
if(searchTermExist) {
  // Listen for input
  document.getElementById("searchTerm").addEventListener('input', function (event) {
    // disableButtonToggle
    disableButtonToggle();
  });

  // disableButtonToggle
  disableButtonToggle();

  // Allows for Enter Key to serve as Button Click
  document.getElementById("searchTerm").addEventListener("keyup", function (event) {
    // If key is not Enter return nothing
    // Else trigger setSearchTerm
    if(event.key !== "Enter") {
      return;
    } else {
      event.preventDefault();
      // setSearchTerm
      setSearchTerm();
    }
  })

  // Fresh Search
  document.getElementById("searchTerm").value = "";
}