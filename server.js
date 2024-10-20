const express = require('express');
const fs = require('fs-extra');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const app = express();
const PORT = 3000;

//These are the blog and auth routes
app.use('/auth', authRoutes);
app.use('/posts', blogRoutes);

app.use(express.json());


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
