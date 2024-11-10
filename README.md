# WatchToEarnApp

A full-stack web application where users can earn credits by watching YouTube videos. Users’ credits are updated only when they watch the entire video, ensuring genuine engagement. The app features a profile page, wallet balance tracking, and prevents skipping for fair earning.

## Features
- **Home Screen**: Embedded YouTube video that must be watched fully to earn credits.
- **Wallet System**: Users earn credits upon completing video watch time, stored in their wallet.
- **Profile Management**: User profile page to view personal information and credits.
- **Backend API**: A Node.js + MongoDB backend that handles user data, credits, and verification.
- **Frontend**: Built with React for interactive and responsive UI.

## Tech Stack
- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Project Structure
```plaintext
WatchToEarnApp
├── backend
│   ├── config
│   │   └── db.js         # MongoDB connection setup
│   ├── models
│   │   └── User.js       # User schema and model
│   ├── routes
│   │   └── userRoutes.js # User-related routes
│   └── server.js         # Main server file
├── frontend
│   ├── public
│   └── src
│       ├── components    # Reusable React components
│       ├── App.js        # Main app entry point
│       ├── index.js      # ReactDOM render file
│       └── styles.css    # Custom styles
└── .gitignore            # Git ignore file
