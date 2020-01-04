import Component from '@glimmer/component';
import ENV from '../config/environment';

export default class TweetComponent extends Component {
  get token() {
    return encodeURIComponent(ENV.CONSUMER_KEY);
  }
}
