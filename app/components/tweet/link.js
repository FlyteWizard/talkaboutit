import Component from '@glimmer/component';

const TWITTER_URL = 'https://twitter.com/';
const STATUS = '/status/';

export default class TweetLinkComponent extends Component {
  get url() {
    let { screenName, idStr } = this.args;

    return `${TWITTER_URL}${screenName}${STATUS}${idStr}`;
  }
}