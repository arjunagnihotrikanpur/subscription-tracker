# 📦 Subscription Tracking API

A simple RESTful API to manage and track your subscriptions — built using **Node.js**, **Express**, and **MongoDB**. This project lets you log, update, delete, and analyze your recurring subscriptions like Netflix, Spotify, and more.

---

## Author

Arjun Agnihotri
Full Stack Developer

http://arjunagnihotri.com/
https://www.linkedin.com/in/arjunagni/
https://github.com/arjunagnihotrikanpur/subscription-tracker

## ✨ Features

- Add new subscriptions with price, renewal cycle, and category
- View all subscriptions
- Edit or delete existing subscriptions
- Monthly/yearly cost summary
- Filter subscriptions by category
- MongoDB integration for persistent storage

---

## 📁 Project Structure

/subscription-tracker-api
│
├── controllers/ # Logic for handling requests
├── models/ # Mongoose models
├── routes/ # Route definitions
├── config/ # MongoDB config
├── middleware/ # Error handling, validation
├── .env # Environment variables
├── server.js # Entry point
└── package.json

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arjunagnihotrikanpur/subscription-tracker.git
   cd subscription-tracker
   ```
2. **Install dependencies**
   npm install
3. **Configure environment**
   Create a .env file in the root folder and add
   ```bash
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/subscriptionDB
   ```
4. **Run the Server**
   ```bash
   npm run dev
   ```
   The API will be available at: http://localhost:5000/api/subscriptions

## 🧪 API Endpoints

Method Route Description
GET /api/subscriptions Get all subscriptions
GET /api/subscriptions/:id Get a specific subscription
POST /api/subscriptions Add a new subscription
PUT /api/subscriptions/:id Update a subscription
DELETE /api/subscriptions/:id Delete a subscription

## Sample Subscription Object

{
"name": "Netflix",
"price": 499,
"renewalCycle": "monthly", // or "yearly"
"category": "Entertainment",
"startDate": "2025-07-29"
}

## Tech Stack

/subscription-tracker-api
│
├── Backend: Node.js, Express.js
├── Database: MongoDB + Mongoose
├── Dev Tools: Nodemon, dotenv

## Liscense

This project is licensed under the MIT License.

---
