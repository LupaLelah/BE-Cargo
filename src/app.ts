import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS (Allow all origins by default)
app.use(cors());

app.use(express.json());

// Optional: support URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const API_V1 = '/v1';
// app.use('/api/users', userRoutes);

export default app;
