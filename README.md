<body>
    <header>
        <h1>Book Store App</h1>
        <p>Welcome to the GitHub repository of Book Store App! This project is a robust web application built with
            React, showcasing a user-centric interface with secure authentication, dynamic routing, and real-time
            database integration.</p>
    </header>
    <section>
        <h2>Key Features
        </h2>
        <ul>
            <li><strong>React Context API</strong></li> Manages global state across the application, providing a
            seamless state management solution without third-party libraries.
            <li><strong>React Router</strong></li> Facilitates nested layouts and dynamic routing throughout the
            application.
            <li><strong>Private Routes</strong></li> Ensures secure access to authenticated user pages using Firebase
            authentication.
            <li><strong>Firebase Authentication</strong></li> Manages user authentication processes, providing secure
            log-in and registration features.
            <li><strong>Firebase Realtime Database</strong></li> Stores and syncs data in real time, enhancing the user
            experience with instant updates.
            <li><strong>Material-UI</strong></li> Offers a comprehensive suite of UI tools to create intuitive and
            responsive designs.
            <li><strong>UUIDv4</strong></li> Generates unique identifiers for entities, ensuring data integrity and
            uniqueness.
            <li><strong>Toastify</strong></li> Provides elegant notifications and alerts for user interactions.
            <li><strong>Swiper</strong></li> Implements dynamic carousels for a visually engaging user experience.
        </ul>
    </section>
    <section id="getting-started">
        <h2>Getting Started</h2>
        <h3>Prerequisites</h3>
        <p>What you need to install the software:</p>
        <ul>
            <li>Node.js</li>
            <li>npm (Node Package Manager)</li>
            <li>A Firebase account</li>
        </ul>
        <p>To get started with the repository, follow these steps:</p>
        <h3>1.Installation</h3>
        <ol>
            <li>Clone the repository to your local machine using the following command:</li>
            <pre><code>git clone https://github.com/asyylz/Book-Store.git</code></pre>
            <li>Navigate to the project directory you choose:</li>
            <pre><code>cd book-store</code></pre>
            <li>Install project dependencies using npm:</li>
            <pre><code>npm install</code></pre>
        </ol>
        <h3>2.Set up Firebase</h3>
        <ul>
            <li>Create a Firebase project in the Firebase console.</li>
            <li>Enable Authentication and configure the Realtime Database.</li>
            <li>Place your Firebase config in a .env file at the root of your project:</li>
            <pre><code>FIREBASE_API_KEY=&lt;your-api-key&gt;
            FIREBASE_AUTH_DOMAIN=&lt;your-auth-domain&gt;
            FIREBASE_DATABASE_URL=&lt;your-database-url&gt;
            FIREBASE_PROJECT_ID=&lt;your-project-id&gt;
            FIREBASE_STORAGE_BUCKET=&lt;your-storage-bucket&gt;
            FIREBASE_MESSAGING_SENDER_ID=&lt;your-messaging-sender-id&gt;
            FIREBASE_APP_ID=&lt;your-app-id&gt;
            FIREBASE_MEASUREMENT_ID=&lt;your-measurement-id&gt;</code></pre>
        </ul>
        <h3>3.Run the development server</h3>
        <li>Start the development server:</li>
        <pre><code>npm start</code></pre>
    </section>
    <section>
        <h1>Outcome</h1>
        <p>Reach outcome site <a href="https://asybook-store.netlify.app/">here</a> </p>
    </section>
    <h2>Architecture</h2>
    <footer>
        <h2>Contributing</h2>
        <p>Contributions to the project are welcome! If you find any issues or have suggestions for improvements, please
            feel free to open an issue or submit a pull request.</p>
        <h2>License</h2>
        <p>This project is licensed under the MIT License.</p>
    </footer>
</body>