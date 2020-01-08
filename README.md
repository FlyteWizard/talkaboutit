# TalkAboutIt

This README outlines the details of collaborating on this Ember application.

TalkAboutIt is an application that lets users view tweets based on a search term they entered.

**Original Application made during HackVictoria 2016**

Fork of original repository: [https://github.com/FlyteWizard/HackVictoria](https://github.com/FlyteWizard/HackVictoria)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>`
* `cd talkaboutit`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Configuration

1. Register for Twitter Developer: https://developer.twitter.com/
2. Register App: https://developer.twitter.com/en/apps
3. Generate/Create Consumer API Keys (API Key, API Secret)
4. Generate/Create Access Token and Access Token Secret
5. Create a `.env` file copying the format from `.env.example`
6. Insert API Keys and Access Tokens

### Deploying

1. Login to Heroku
2. Create Application
3. Set Config Vars
4. Push to heroku

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
