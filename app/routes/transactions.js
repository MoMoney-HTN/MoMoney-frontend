import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // Fetch the expenses list from Freshbooks API and return here
        return ["Expense 1", "Expense 2", "Expense 3"];
    }
});
