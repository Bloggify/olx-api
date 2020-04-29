## Documentation

You can see below the API reference of this module.

### `OlxApi(host, clientId, clientSecret)`
Initialize the instance of the OlxApi class.

#### Params

- **String** `host`: The OLX host (e.g. `https://www.olx.ro/api`).
- **String** `clientId`: Your application client id.
- **String** `clientSecret`: Your application client secret.

#### Return
- **OlxApi** The OlxApi instance.

### `getTokens(grantType)`
Get and set the authentication tokens in the instance.

#### Params

- **String** `grantType`: One of the following:
     - `authorization_code`
     - `client_credentials`
     - `refresh_token`

#### Return
- **Object** An object containing the tokens or other authentication data.

### `post(path, data)`
Make a POST request.

#### Params

- **String** `path`: The API path.
- **Object** `data`: The POST data.

#### Return
- **Object** The API response.

### `get(path)`
Make a GET request.

#### Params

- **String** `path`: The API path.

#### Return
- **Object** The API response.

