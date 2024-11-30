const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Stock portfolio analysis API!');
});

// Endpoint 1

function calculateStockReturns(boughtAt, marketPrice, quantity) {
  return (marketPrice - boughtAt) * quantity;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  let result = calculateStockReturns(boughtAt, marketPrice, quantity);
  res.send(result.toString());
});

// Endpoint 2
function calculateTotalReturns(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = calculateTotalReturns(stock1, stock2, stock3, stock4);
  res.send(result.toString());
});

// Endpoint 3
function calculateReturnPercentage(boughtAt, returns) {
  return (returnPercentage = (returns / boughtAt) * 100);
}

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let result = calculateReturnPercentage(boughtAt, returns);
  res.send(result.toString());
});

// Endpoint 4
function calculateTotalreturnPercenatge(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = calculateTotalreturnPercenatge(stock1, stock2, stock3, stock4);
  res.send(result.toString());
});

// Endpoint 5
function stockStatus(returnPercentage) {
  if (returnPercentage > 0) {
    returnPercentage = 'profit';
  } else {
    returnPercentage = 'loss';
  }
  return returnPercentage;
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result = stockStatus(returnPercentage);
  res.send(result.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
