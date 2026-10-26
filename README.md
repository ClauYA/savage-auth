# 21 Savage Fans: Message Board
 
A community message board where fans can leave a thought, react to other people's messages, and keep the conversation going.

![21 Savage](public/21savage.jpg)

## Features
 
- View all messages on the board
- Add a new message with a name and text
- Like or dislike a message (thumbs up / thumbs down)
- Delete a message

## Tech Stack
 
- **Frontend:** EJS templates, HTML, CSS, Bootstrap, Font Awesome, vanilla JavaScript
- **Backend:** Node.js, Express
- **Authentication:** Passport.js (local strategy), bcrypt, express-session
- **Database:** MongoDB
- **Deployment:** Render

## Authentication
 
Users create an account on the `/signup` page and log in on `/login`.
 
- **bcrypt** hashes each password before it is saved to the database.
- **Passport.js** checks the email and password on login, using the local strategy.
- **express-session** keeps the user logged in between requests.

## Getting Started
 
### Prerequisites
 
- Node.js (v18 or later)
- A MongoDB database (for example, a free MongoDB Atlas cluster)
### Installation
 
1. Clone the repository:
```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
```
 
2. Install dependencies:
```bash
   npm install
```
 
3. Create a `.env` file in the project root:
```env
   MONGO_URI=your_mongodb_connection_string
   PORT = 8080
```
 
4. Start the server:
```bash
   node server
```
 
5. Open `http://localhost:8080` in your browser.


**Live demo:** 

https://savage-auth-uvyh.onrender.com/