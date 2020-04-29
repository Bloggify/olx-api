"use strict";

const axios = require("axios")

class OlxApi {

    /**
     * OlxApi
     * Initialize the instance of the OlxApi class.
     *
     * @name OlxApi
     * @function
     * @param {String} host The OLX host (e.g. `https://www.olx.ro/api`).
     * @param {String} clientId Your application client id.
     * @param {String} clientSecret Your application client secret.
     * @returns {OlxApi} The OlxApi instance.
     */
    constructor (host, clientId, clientSecret) {
        this.host = host
        this.client_id = clientId
        this.client_secret = clientSecret
        this.access_token = null
        this.refresh_token = null
        this.version = "2.0"
    }

    /**
     * getTokens
     * Get and set the authentication tokens in the instance.
     *
     * @name getTokens
     * @function
     * @param {String} grantType One of the following:
     *
     *      - `authorization_code`
     *      - `client_credentials`
     *      - `refresh_token`
     *
     * @returns {Object} An object containing the tokens or other authentication data.
     */
    getTokens (grantType) {
        return this.post("/open/oauth/token", {
            grant_type: grantType,
            client_id: this.client_id,
            client_secret: this.client_secret,
            scope: "v2 read write"
        }).then(res => {
            this.access_token = res.access_token
            this.refresh_token = res.refresh_token
            return res
        })
    }

    _makeRequest (path, data) {
        const conf = {
            url: `${this.host}${path}`,
            headers: {
                Version: this.version
            }
        }
        if (this.access_token) {
            conf.headers.Authorization = `Bearer ${this.access_token}`
        }
        if (data) {
            conf.data = data
            conf.method = "POST"
        }
        return axios(conf).then(r => r.data)
    }

    /**
     * post
     * Make a POST request.
     *
     * @name post
     * @function
     * @param {String} path The API path.
     * @param {Object} data The POST data.
     * @returns {Object} The API response.
     */
    post (path, data) {
        return this._makeRequest(path, data)
    }

    /**
     * get
     * Make a GET request.
     *
     * @name get
     * @function
     * @param {String} path The API path.
     * @returns {Object} The API response.
     */
    get (path) {
        return this._makeRequest(path)
    }

}

module.exports = OlxApi
