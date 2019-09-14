import Component from '@ember/component';

export default Component.extend({
    actions: {
        showTransaction(transaction) {
          alert(transaction);
        }
    }
});
