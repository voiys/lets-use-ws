const express = require('express');
const { Server } = require('ws');
const PORT = process.env.PORT || 4000;

const server = express().listen(PORT, () =>
  console.log(`Listening on ${PORT}`)
);

const wss = new Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('close', () => {
    ws.close();
  });
  ws.send(
    JSON.stringify({
      type: 'need-waiter',
      table: 6,
    })
  );
});
