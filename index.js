const server = require("./src/app");
const port = 3001;

//Server is created
  server.listen(port, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
