import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | tweet', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<Tweet />`);

    assert.dom('div').hasClass('col-sm-12');
    assert.dom('.card').exists();
    assert.dom('.card-header').exists();
    assert.dom('.card-title').exists();
    assert.dom('.card-text').exists();
    assert.dom('a').exists();
  });
});
