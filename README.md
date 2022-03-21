# Express Config

### The idea of this package is to separate secrets from other configuration variables. The secrets will remain in the .env file and the other variables will be stored on .yml files.

1. Install the package in your ongoing project
   ```bash
   $ yarn install https://github.com/WayTooDigital/express-config
   ```
   Now you will see that your `package.json` file has a new record:
   ```json
   "express-config": "https://github.com/WayTooDigital/express-config"
   ```
2. Edit your entrance file (for instance ./index.js) and add this line the more top as possible
   ```js
   import "express-config";
   ```
3. You will have to have a `NODE_ENV` variable into your .env file which indicates what environment the script is executing (for instance local, staging or prod).

4. The config files will have to be stored into the `./config` folder and the script will load the corresponding to your current environment (for instance `./config/local.yml`).