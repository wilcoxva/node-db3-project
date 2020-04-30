const server = require('./server.js');
const schemeRouter = require('./schemes/scheme-router')

const PORT = process.env.PORT || 5000;

server.use("/schemes", schemeRouter)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});