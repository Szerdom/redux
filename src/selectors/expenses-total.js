export default (expenses) => {
    const getSum = (total, value) => total + value;
    const prices = expenses ? expenses.map((expense) => expense.amount || 0) : 0;
    return prices.reduce(getSum, 0);
};