const app= require('./src/app');
const http= require('http');
const connectDB= require('./src/db/db');
const port = process.env.PORT || 3000;
connectDB();

const server=http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});