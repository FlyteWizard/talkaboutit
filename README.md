# TalkAboutIt - HackVictoria :fuelpump:

TalkAboutIt is an application that lets users view tweets based on a search term they entered.

**Original Application made during HackVictoria 2016**

Fork of original repository: [https://github.com/FlyteWizard/HackVictoria](https://github.com/FlyteWizard/HackVictoria)

## Made By:

* Christophe Pouliot (Initial Backend/JS)
* Dominique Charlebois (Initial HTML/CSS | App Rewrite)

## Made With:

* HTML/CSS/JavaScript
* Flask
* Gunicorn Server
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

10. Visit `http://127.0.0.1:5000/`

## Deploying

1. Login to Heroku

2. Create Application

3. Set Config Vars

4. Push to heroku

## Documentation

* https://developer.twitter.com/en/docs
* https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets
* https://python-twitter.readthedocs.io/en/latest/
