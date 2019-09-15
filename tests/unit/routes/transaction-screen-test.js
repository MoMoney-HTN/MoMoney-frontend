import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | transaction-screen', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:transaction-screen');
    assert.ok(route);
  });
});
