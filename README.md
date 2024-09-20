# AI Writing Assistant Platform

A web application designed to enhance your writing experience using the power of AI. This project integrates several modern web technologies to offer a seamless and interactive user interface for writing assistance.

## **Features**

- **Spelling Checker**: Automatically detects and corrects spelling errors in your text.
- **Grammar Checking**: Enhances the quality of your writing by identifying and suggesting corrections for grammatical errors.
- **Rephrase Sentences**: Provides alternative sentence structures to improve clarity or tone.
- **Save Corrected Sentences**: Allows users to save corrected sentences.

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

## **Setup**

### **Prerequisites**
- Node.js and npm (Node Package Manager) installed on your machine.
- An OpenAI API key. [Sign up for an API key here](https://beta.openai.com/signup/).

### **Installation**

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
3. **Configure Environment Variables**

   Create a `.env` file in the root directory of the project with the following content:

   ```env
   OPENAI_KEY=your_openai_api_key
   PORT=your_port_number
    ```
   Replace `your_openai_api_key` and `your_port_number` with your actual OpenAI API key and desired port number.
   
3. **Run the development for both client and server:**

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
│   │   └── main.jsx     # Entry point
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
```

## **Usage**

1. **Navigate to the URL**:

   Open your browser and go to the provided URL given on the terminal.
   ```bash
   http://localhost:5000 (or the port specified in your '.env' file).
   ```
   
3. **Login**:

   Click the login button on the top right of the navbar. You can log in using the provided authentication options.

6. **Access Writing Features**: 
   - Locate the `Write` button next to the `Logout` button on the navbar to navigate to the writing page.
   - Alternatively, click the `Get Started with Writing` button on the homepage.

7. **Enter Your Text**:

   On the writing page, input your text into the editor.

9. **Check Spelling**:

   Select the `Check Spelling` button to identify and correct spelling errors.

10. **Check Grammar**:

       Click the `Check Grammar` button to review your text for grammar mistakes and receive suggestions for improvement.

12. **Rephrase Sentences**:
       - Highlight the text you want to rephrase, and the `Selected Text` section will display.
       - Select the `Rephrase Sentence` button to receive three alternative sentence structures.
   
11. **Accept Corrected Sentences**: 
       - After reviewing your corrections, you can accept them.
       - The corrected sentences will appear in the `Corrected Sentences` section on the right for future reference.

