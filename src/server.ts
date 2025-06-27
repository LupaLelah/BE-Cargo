import app from './app';

const PORT: number = Number(process.env.PORT) || 5000;
const HOST = '0.0.0.0'; // Dengarkan di semua IP

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
