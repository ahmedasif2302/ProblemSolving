// Best Time to Buy and Sell Stock
// Brute force Solution
var maxProfit1 = function (prices) {
  let buy = 0;
  let sell = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      sell = prices[j];
      let diff = sell - buy;
      if (diff > profit) {
        profit = diff;
      }
    }
  }
  return profit;
};

var maxProfit2 = function (prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }

    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
};

console.log(maxProfit2([7, 6, 4, 3, 1]));
