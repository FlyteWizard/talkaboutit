import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<MainContent />`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      <MainContent>
        Hello
      </MainContent>
    `);

    assert.equal(this.element.textContent.trim(), 'Hello');
  });
});
