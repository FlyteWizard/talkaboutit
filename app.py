# import the Flask class from the flask module
from flask import Flask, jsonify, render_template, request
# import the load_dotenv from the dotenv module
from dotenv import load_dotenv
# import json, oauth2, os, and urllib
import json
import oauth2
import os
import urllib

# Initiate dotenv
load_dotenv()

# Create the application object
app = Flask(__name__)

# Set Keys and Secrets
CONSUMER_KEY = os.getenv("CONSUMER_KEY")
CONSUMER_SECRET = os.getenv("CONSUMER_SECRET")
ACCESS_KEY = os.getenv("ACCESS_KEY")
ACCESS_SECRET = os.getenv("ACCESS_SECRET")

# Home
@app.route('/')
def home():
  return render_template('index.html')

# Tweets
@app.route('/tweets')
def tweets():
  return render_template('tweets.html')

# Search
@app.route('/search')
def search():
  # Oauth2 Setup
  consumer = oauth2.Consumer(key=CONSUMER_KEY, secret=CONSUMER_SECRET)
  access_token = oauth2.Token(key=ACCESS_KEY, secret=ACCESS_SECRET)
  client = oauth2.Client(consumer, access_token)

  # Get search from URL
  search_term = request.args.get("search")
  result_type = request.args.get("resultType")
  tweets = []

  if search_term:
    # Build query string

    # Geofence to ~Victoria, BC
    geofence = "48.407326,-123.329773,20km"
    # Add search term to query, add geofence to geocode and set truncate to false
    url = "https://api.twitter.com/1.1/search/tweets.json?q=%s" % search_term + "&geocode=%s" % geofence + "&tweet_mode=extended" + "&result_type=%s" % result_type

    # GET Twitter API
    response, data = client.request(url)

    # Parse data
    json_data = json.loads(data)
    statuses = json_data.get('statuses')
    if statuses:
      for tweet in statuses:
        # create readable date
        created = tweet.get('created_at')
        splt = created.split(' ')
        # Their date is in "Sat March 2nd 00:00... 2016", so take March 2nd 2016
        created = '%s %s %s' % (splt[1], splt[2], splt[-1])
        # Set variables
        fmt_tweet = {
          'created_at': created,
          'id_str': tweet.get('id_str'),
          'full_text': tweet.get('full_text'),
          'name': tweet['user'].get('name'),
          'screen_name': tweet['user'].get('screen_name')
        }
        tweets.append(fmt_tweet)

  # Return tweet variables
  return jsonify(tweets=tweets)

if __name__ == '__main__':
  port = int(os.environ.get("PORT", 5000))

  if port == 5000:
    app.debug = True

  app.run(host='0.0.0.0', port=port)
