# Design par les tests - Séance 1

## Setup
1. Install dependencies
    ```
    $ npm install
    ```

2. If on windows change test command (in package.json ) with
   ```
   "test": "set NODE_ENV=test&&mocha --recursive --exit --timeout 10000 --reporter nyan"
   ```
3. Launch your tests
   ```
   $ npm test
   ```

Done 👌