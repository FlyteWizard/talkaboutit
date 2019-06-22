# TalkAboutIt - HackVictoria

Application made during HackVictoria 2016.

## Made By:

* Christophe Pouliot (Initial Backend/JS)
* Dominique Charlebois (Initial HTML/CSS | App Rewrite)

## Made With:

* HTML/CSS/JavaScript
* Flask Python Server
* Bootstrap 4

## Getting Started

1. Obtain Local Copy

2. Register for Twitter Developer: https://developer.twitter.com/

3. Register App: https://developer.twitter.com/en/apps

4. Generate/Create Consumer API Keys (API Key, API Secret)

5. Generate/Create Access Token and Access Token Secret

6. Create a `.env` file copying the format from `.env.example`

7. Insert API Keys and Access Tokens

8. `pip3 install -r requirements.txt`

9. `flask run` or `python3 app.py`

## Deploying

## Documentation

* https://developer.twitter.com/en/docs
* https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html

## TODO

* Allow Users to Set `geocode` Restrictions [Reference](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets)
  * Latitude
  * Longitude
  * Radius (Km)
* Allow Users to Set `result_type`
  * Mixed / Recent / Popular