# import the Flask class from the flask module
from flask import Flask, jsonify, render_template, request
# import the load_dotenv from the dotenv module
from dotenv import load_dotenv
# import os and twitter
import os
import twitter

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
@app.route('/search', methods=['POST'])
def search():
  api = twitter.Api(consumer_key=CONSUMER_KEY,
                    consumer_secret=CONSUMER_SECRET,
                    access_token_key=ACCESS_KEY,
                    access_token_secret=ACCESS_SECRET)

  data_from_user = request.json

  search_term = data_from_user['search']
  result_type = data_from_user['type']
  latitude = data_from_user['lat']
  longitude = data_from_user['long']
  radius = data_from_user['rad']

  tweets = []

  if search_term:
    # Geofence to location specified from user
    geofence = latitude + "," + longitude + "," + radius + "km"
    # Add search term to query, add geofence to geocode and set truncate to false
    url = "q=%s" % search_term + "&geocode=%s" % geofence + "&tweet_mode=extended" + "&result_type=%s" % result_type

    data = api.GetSearch(raw_query=url)

    if data:
      for tweet in data:
        # create readable date
        created = tweet.created_at
        splt = created.split(' ')
        # Their date is in "Sat March 2nd 00:00... 2016", so take March 2nd 2016
        created = '%s %s %s' % (splt[1], splt[2], splt[-1])
        # Set variables
        fmt_tweet = {
          'created_at': created,
          'id_str': tweet.id_str,
          'full_text': tweet.full_text,
          'name': tweet.user.name,
          'screen_name': tweet.user.screen_name
        }
        tweets.append(fmt_tweet)

  # Return tweet variables
  return jsonify(tweets=tweets)

if __name__ == '__main__':
  port = int(os.environ.get("PORT", 5000))

  if port == 5000:
    app.debug = True

  app.run(host='0.0.0.0', port=port)
