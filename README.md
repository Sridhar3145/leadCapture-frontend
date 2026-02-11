# Lead Capture Dashboard – Frontend

This is the frontend application for the Lead Capture Dashboard project.
It is built as part of the MERN / Automation Developer screening assignment.

---

## Features

- Lead creation form with validation
- Lead list in table format
- Lead detail view page
- Loading states
- Success and error messages
- Webhook status feedback after lead creation
- Responsive UI (mobile and desktop)

---

## Tech Stack

- React (Vite)
- Tailwind CSS
- React Router
- Fetch API


## Setup Instructions

1. Clone the repository

bash
git clone https://github.com/Sridhar3145/leadCapture-frontend.git
Go to the project folder

cd leadCapture-frontend
Install dependencies

npm install
Start the development server

npm run dev
The app runs at:

http://localhost:5173
Backend API
This frontend consumes APIs from the backend project.

Backend repository:

https://github.com/Sridhar3145/leadCapture-backend

Webhook Behaviour
After a lead is successfully created, the frontend displays:

Success message when the webhook is triggered successfully

Warning message when the webhook trigger fails

The webhook is triggered by the backend and the webhook status is returned in the API response.

Pages
Lead Form – Create a new lead

Lead List – View all leads in a table

Lead Detail – View single lead information

