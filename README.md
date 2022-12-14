# Installation

1. Clone this repository:
  
  ```
  git clone https://github.com/edwardsmoses/braintree-rn-integration-sample
  ```
  
2. Change into the project directory:
  
  ```
  cd braintree-rn-integration-sample
  ```
  
3. In order to run the app locally change the directory:
  
  ```
  cd app
  ```
  
4. Install all the dependencies to run the App locally:
  
  ```
  npm install
  ```
  
5. Now Run the App:
  
  ```
  npm start
  ```

6. Run the backend locally,
  
  ```
   cd backend
   npm install 
   npm start
   ```

### Project Setup

The following folders contains the following things:

- The **app** folder contains the code and setup for **Mobile App**.
- The **backend** folder contains the code and setup for **The serverside**.

### Configuration setup

- Update the authorization property in the `backend/braintree.html` with the tokenization key from your Braintree account
- Add the .env, and add the following properties  
```
BRAINTREE_MERCHANT_ID=
BRAINTREE_PUBLIC_KEY=
BRAINTREE_PRIVATE_KEY=
```


### Look 
<img src="https://user-images.githubusercontent.com/19548998/182822484-49b19ae7-62fb-4e80-b827-591ff8072fbf.png" style="width: 300px" />
