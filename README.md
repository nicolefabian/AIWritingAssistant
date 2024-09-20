# AI Writing Assistant Platform

A web application designed to enhance your writing experience using the power of AI. This project integrates several modern web technologies to offer a seamless and interactive user interface for writing assistance.

## **Technologies Used**
- **React**: Frontend framework
- **Tailwind CSS**: For styling
- **Vite**: Development environment for fast builds and hot module replacement
- **Axios**: For making HTTP requests to the API
- **React-router-dom**: For routing and navigation within the app
- **Privy**: For authentication
- **Node.js**: Server-side framework
- **React Icons**: For including icons in the UI
- **ES7+ Extension**: To use modern JavaScript syntax shortcuts like `rafce` (React Arrow Function Component with Export)
- **Thunder Client**: For testing your APIs in VSCode.

## **Setup Instructions**

1. **Clone the repository:**

    ```bash
    git clone https://github.com/nicolefabian/AIWritingAssistant.git
    ```

2. **Install dependencies for both client and server:**

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. **Run the development servers for both client and server:**

    - For the client:
      ```bash
      cd client
      npm run dev
      ```

    - For the server:
      ```bash
      cd server
      node --watch app
      ```

4. **Access the app**:  
   After running the dev server for the client, navigate to the URL provided in your terminal, usually `http://localhost:port_number/`.

## **Folder Structure**

```bash
.
├── client               # Frontend (React) project
│   ├── src
│   │   ├── components   # React components
│   │   ├── images       # Static images for the app
│   │   ├── pages        # Pages for routing
│   │   ├── App.jsx      # Main app component
│   │   └── main.jsx    # Entry point
│   ├── public           # Public directory for static assets
│   └── package.json     # Frontend project configuration and scripts
│
├── server               # Backend (Node.js) project
│   ├── routes           # API routes
│   ├── controllers      # Logic for handling routes
│   ├── models           # Database models (if applicable)
│   ├── .env             # Environment variables for server (not included in repo)
│   ├── server.js        # Entry point for the server
│   └── package.json     # Backend project configuration and scripts
│
├── .gitignore           # Ignoring node_modules, .env, etc.
└── README.md            # Project documentation
