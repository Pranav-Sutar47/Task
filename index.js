const express = require('express');
const cors = require('cors');

const app = express();

require('dotenv').config();

require('./Config/DBConnection');


app.use(express.json());

app.use(cors({
  origin: true, // reflect origin
  credentials: true,
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization, source"
}));

app.use('/api/book',require('./Routes/Book.route'));

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});



app.listen(process.env.PORT||5000,()=>{
    console.log(`Server is up and listing on port ${process.env.PORT}`);
});
