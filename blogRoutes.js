// routes/blogRoutes.js
const express = require('express');
const router = express.Router();

let posts = [
    { id: 1, title: 'First Blog Post', content: 'my first post' },
    { id: 2, title: 'Second Blog Post', content: 'my second post' },
    { id: 3, title: 'third Blog Post', content: 'my third post' },
    { id: 4, title: 'Second Blog Post', content: 'my fourth post' }
];

// GET all blog posts
router.get('/', (req, res) => {
    res.json(posts);
});

// GET a single blog post by ID
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
});

// POST a new blog post
router.post('/', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

// DELETE a blog post by ID
router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);

    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    posts.splice(postIndex, 1);
    res.status(200).json({ message: 'Post deleted successfully' });
});

module.exports = router;