import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | talkaboutit', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('a.navbar-brand').hasText('TalkAboutIt');
  });

  test('visiting /tweets', async function(assert) {
    await visit('/tweets');

    assert.equal(currentURL(), '/tweets');
    assert.dom('nav').exists();
    assert.dom('a.navbar-brand').hasText('TalkAboutIt');
    
    await click('a.navbar-brand');

    assert.equal(currentURL(), '/');
  });

  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('a.navbar-brand').hasText('TalkAboutIt');

    await click('a.navbar-brand');
    assert.equal(currentURL(), '/');
  });
});
