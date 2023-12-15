import express from 'express';
import categories from './routes/categories.js'
import tasks from './routes/tasks.js'
import { connectToDatabase, getDatabaseClient } from './routes/database.js';
import taskHistory from './routes/taskHistory.js';
import tags from './routes/tags.js';
import mongoose from 'mongoose';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const app=express();
const port = 8080 ;

await connectToDatabase();

app.use(express.json());
app.use('/categories', categories);
app.use('/tasks', tasks);
app.use('/taskHistory', taskHistory);
app.use('/tags', tags);


app.get('/',(req,res) => {
    res.send('Helelo');
})

    const dbClient = getDatabaseClient();
    const collection = await dbClient.collection('Tasks').find().toArray();
    console.log(collection,"collection")
    
app.listen(port, () => {
    console.log(`Fetching status started at http://localhost:${port}`);
    
    });
