## csm

- Client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- API is running on an [Express](https://expressjs.com/) server
- DB is a [postgreSQL](https://www.postgresql.org/) instance configured via [Sequelize](https://sequelize.org/)

In the project directory, you can run:

### `docker-compose up`

Builds app and db docker images and starts containers accessible through [http://localhost:8080](http://localhost:8080)

### `yarn`

- Installs app depencies, ***required for development***

### `yarn build`

- Builds the client for production to the `build` folder

### ***Below commands require a local postgres instance with a db named 'csm running on port 5432'***

### `yarn start-dev`

- Starts both the server and client in development mode via "yarn concurrently" 
- Nodemon watches the server and react-scripts watches the front-end, should force restart/reloads on file changes
- Open [http://localhost:3000](http://localhost:3000) to view client in the browser
- API requests are proxied to server running on [https://localhost:8080](https://localhost:8080)

### `yarn test`

- Launches the test runner


### `yarn start-prod`

- Starts the server only, which serves a production build on [localhost:8080](localhost:8080) ("yarn build" must have been run previously)
