# Amazon Clone

This is an Amazon clone web application built with Next.js, React.js and Firebase. It allows users to browse products, add them to their shopping cart, and complete the checkout process by making payment through Stripe.

The project was created as part of a coding tutorial and can be used as a starting point for building an e-commerce web application.

## Table of Contents

- [Amazon Clone](#amazon-clone)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Technologies Used](#technologies-used)
  - [Tests](#tests)

## Features

- User authentication: users can create an account, log in, and log out
- Shopping cart: users can add products to their cart, update the quantity, and remove them
- Checkout process: users can view their cart, see the total price, and proceed to checkout
- Order history: users can place orders and view their order history

## Installation

1. Clone this repository

```
git clone https://github.com/MatteoDigiorgio/Amazon-clone.git
```

2. Run `npm install` to install the dependencies
3. Create a Firebase project and enable authentication, Cloud Firestore, and Cloud Functions
4. Create a Stripe account and get an API key
5. Create a `.env` file in the root directory and add the following environment variables:

```
# Authentication
GOOGLE_ID=[insert your GOOGLE_ID here]
GOOGLE_SECRET=[insert your GOOGLE_SECRET here]
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=[insert your JWT_SECRET here]

# Stripe
STRIPE_PUBLIC_KEY=[insert your STRIPE_PUBLIC_KEY here]
STRIPE_SECRET_KEY=[insert your STRIPE_SECRET_KEY here]

# Stripe Terminal/CLI
STRIPE_SIGNING_SECRET=[insert your STRIPE_SIGNING_SECRET here]

# Service Account
FIREBASE_SERVICE_ACCOUNT_KEY=[insert your FIREBASE_SERVICE_ACCOUNT_KEY here]

HOST=http://localhost:3000
```

6. Run `npm run dev` to start the development server

## Technologies Used

- Next.js
- React
- Firebase (Authentication, Cloud Firestore, Cloud Functions)
- Redux
- Stripe for payment processing
- Jest for testing

## Tests

To run tests simply run `npm test`
