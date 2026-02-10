const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a project title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    longDescription: {
        type: String,
        maxlength: [2000, 'Long description cannot be more than 2000 characters']
    },
    imageUrl: {
        type: String,
        default: 'https://images.unsplash.com/photo-1551650975-87deedd944c3'
    },
    tags: [{
        type: String,
        trim: true
    }],
    technologies: [{
        type: String,
        trim: true
    }],
    githubUrl: {
        type: String
    },
    liveUrl: {
        type: String
    },
    featured: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        enum: ['web', 'python', 'fullstack', 'mobile', 'other'],
        default: 'web'
    },
    status: {
        type: String,
        enum: ['planning', 'in-progress', 'completed', 'maintenance'],
        default: 'completed'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', projectSchema);