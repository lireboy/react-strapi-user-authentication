# Basic User Authentication with React & Strapi
This project contains a simple implementation of Basic User Authentication on a plane react app.

## Installation

in the folder "frontend" and "backend" do:
```bash
npm install
```

## Usage
- cd to "frontend" and run:
```bash
npm run start
```
This will run the react frontend on port xyz


- cd to "backend" and run:
```bash
npm run develop
```
This will run the strapi backend on port xyz

## When there is an Error while running the Backend
- cd into 'backend' and create a .env file
- paste the code below inside of it:
```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS=ut52AQNtTdBmESqUlb9ltw==,zZFeWw5y1+q+QnLqmDXd3A==,sEoE3vJUZaY+dUnDV01tiw==,lTPq+wQ88ge/IKuLKGoSGg==
API_TOKEN_SALT=WDasBM74J6MSVq8a1kFL2w==
ADMIN_JWT_SECRET=0B0T4hv7sFDL+wx7uPWaeg==
TRANSFER_TOKEN_SALT=ylsqTNS1VWIGYUwv+H4AMA==
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=zMyzuFCmXUJxArNDRBLmKg==
```