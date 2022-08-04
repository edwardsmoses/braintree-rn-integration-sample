const express = require('express')
const path = require('path');
const braintree = require("braintree");
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set your secret key. Remember to switch to your live secret key in production.
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/braintree', function (req, res) {
  res.sendFile(path.join(__dirname, 'braintree.html'));
});

app.post('/createPaymentTransaction', async (req, res) => {
  const { body } = req;

  try {

    //create a transaction 
    const result = await gateway.transaction.sale({
      amount: body.amount,
      paymentMethodNonce: body.nonce,
      options: {
        submitForSettlement: true
      }
    });


    res.status(200).json({
      isPaymentSuccessful: result.success,
      errorText: result.transaction?.processorResponseText || "",
    });

  } catch (error) {
    console.log("Error in creating transaction ", error);
    res.status(400).json({
      isPaymentSuccessful: false, errorText: "Error in creating the payment transaction" + error
    });

  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})