import express from 'express';

const app = express();

const server = app.listen(3000, () => {
    console.log('Server online!');
});

process.on('SIGINT', () => {
    server.closeAllConnections();
    console.log('Closed all connections');
    process.exit(0);
});