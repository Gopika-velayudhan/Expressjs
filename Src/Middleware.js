const express = require('express');
const app = express();
const PORT = 3009;

// Custom middleware
const myMiddleware = (req, res, next) => {
    console.log('This is a custom middleware');
    next(); // Move to the next middleware in the stack
};

// Applying middleware globally
app.use(myMiddleware);

// Route handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
