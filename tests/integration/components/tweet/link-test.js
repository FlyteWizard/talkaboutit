import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tweet/link', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<Tweet::Link />`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      <Tweet::Link>
        View Tweet
      </Tweet::Link>
    `);

    assert.equal(this.element.textContent.trim(), 'View Tweet');

    assert.dom('a').exists();
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <Tweet::Link
        @screenName='screenName'
        @idStr='1234'
      >
        View Tweet
      </Tweet::Link>
    `);

    assert.dom('a').exists();
    assert.dom('a').hasAttribute('href', /^https:\/\/twitter\.com/, 'the href starts with "https://twitter.com/"');

    let { href } = find('a');

    assert.ok(href.includes('screenName'), 'the href should include the screenName parameter');
    assert.ok(href.includes('1234'), 'the href should include the idStr');
  });

});
