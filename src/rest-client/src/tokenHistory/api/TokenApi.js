/*
 * Token History API
 * # Introduction  Token History API는 KLAY, FT (KIP-7, Labeled ERC-20), NFT (KIP-17, Labeled ERC-721) 토큰 정보, 이들 토큰을 주고받은 기록을 조회하는 기능을 제공합니다. 여러분은 특정 EOA가 KLAY를 주고받은 기록을 확인하거나 EOA가 가지고 있는 NFT 정보를 불러오는 등 Token History API를 다양하게 활용할 수 있습니다.   Token History API 사용에 관한 자세한 내용은 [튜토리얼](https://klaytn.com)을 확인하십시오.   이 문서 혹은 KAS에 관한 문의는 [개발자 포럼](https://forum.klaytn.com/)을 방문해 도움을 받으십시오
 *
 * OpenAPI spec version: 0.7.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient', '../model/Nft', '../model/PageableNfts'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('../model/Nft'), require('../model/PageableNfts'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.TokenApi = factory(root.TokenHistoryApi.ApiClient, root.TokenHistoryApi.Nft, root.TokenHistoryApi.PageableNfts)
    }
})(this, function(ApiClient, Nft, PageableNfts) {
    /**
     * Token service.
     * @module api/TokenApi
     * @version 0.7.0
     */

    /**
     * Constructs a new TokenApi.
     * @alias module:api/TokenApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    const exports = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance

        /**
         * Callback function to receive the result of the getNftById operation.
         * @callback module:api/TokenApi~getNftByIdCallback
         * @param {String} error Error message, if any.
         * @param {module:model/Nft} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * getNftById
         * 특정 NFT의 정보를 불러옵니다.
         * @param {String} xChainId Klaytn 네트워크 체인 ID (1001 or 8217)
         * @param {String} nftAddress 조회할 NFT 컨트랙트 주소
         * @param {String} tokenId 조회할 NFT ID (16진수)
         * @param {module:api/TokenApi~getNftByIdCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/Nft}
         */
        this.getNftById = function(xChainId, nftAddress, tokenId, callback) {
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getNftById")
            }

            // verify the required parameter 'nftAddress' is set
            if (nftAddress === undefined || nftAddress === null) {
                throw new Error("Missing the required parameter 'nftAddress' when calling getNftById")
            }

            // verify the required parameter 'tokenId' is set
            if (tokenId === undefined || tokenId === null) {
                throw new Error("Missing the required parameter 'tokenId' when calling getNftById")
            }

            const pathParams = {
                'nft-address': nftAddress,
                'token-id': tokenId,
            }
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = Nft

            return this.apiClient.callApi(
                '/v2/contract/nft/{nft-address}/token/{token-id}',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the getNftsByContractAddress operation.
         * @callback module:api/TokenApi~getNftsByContractAddressCallback
         * @param {String} error Error message, if any.
         * @param {module:model/PageableNfts} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * getNftsByContractAddress
         * NFT 컨트랙트를 지정하면, 이 NFT 컨트랙트에서 발행된 모든 NFT의 정보를 불러옵니다.
         * @param {String} xChainId Klaytn 체인 네트워크 ID (1001 or 8217)
         * @param {String} nftAddress
         * @param {Object} opts Optional parameters
         * @param {Number} opts.size 응답 아이템 개수(min=1, max=1000, default=100)
         * @param {String} opts.cursor 특정 위치를 지정하기 위한 오프셋
         * @param {module:api/TokenApi~getNftsByContractAddressCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/PageableNfts}
         */
        this.getNftsByContractAddress = function(xChainId, nftAddress, opts, callback) {
            opts = opts || {}
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getNftsByContractAddress")
            }

            // verify the required parameter 'nftAddress' is set
            if (nftAddress === undefined || nftAddress === null) {
                throw new Error("Missing the required parameter 'nftAddress' when calling getNftsByContractAddress")
            }

            const pathParams = {
                'nft-address': nftAddress,
            }
            const queryParams = {
                size: opts.size,
                cursor: opts.cursor,
            }
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = PageableNfts

            return this.apiClient.callApi(
                '/v2/contract/nft/{nft-address}/token',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the getNftsByOwnerAddress operation.
         * @callback module:api/TokenApi~getNftsByOwnerAddressCallback
         * @param {String} error Error message, if any.
         * @param {module:model/PageableNfts} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * getNftsByOwnerAddress
         * NFT 컨트랙트와 EOA를 지정하면, 이 NFT 컨트랙트에서 발행된 NFT 중 EOA가 가지고 있는 NFT의 정보를 불러옵니다.
         * @param {String} xChainId Klaytn 네트워크 체인 ID (1001 or 8217)
         * @param {String} nftAddress 조회할 컨트랙트 주소
         * @param {String} ownerAddress 조회할 EOA 주소
         * @param {Object} opts Optional parameters
         * @param {Number} opts.size 응답 아이템 개수(min=1, max=1000, default=100)
         * @param {String} opts.cursor 특정 위치를 지정하기 위한 오프셋
         * @param {module:api/TokenApi~getNftsByOwnerAddressCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link module:model/PageableNfts}
         */
        this.getNftsByOwnerAddress = function(xChainId, nftAddress, ownerAddress, opts, callback) {
            opts = opts || {}
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling getNftsByOwnerAddress")
            }

            // verify the required parameter 'nftAddress' is set
            if (nftAddress === undefined || nftAddress === null) {
                throw new Error("Missing the required parameter 'nftAddress' when calling getNftsByOwnerAddress")
            }

            // verify the required parameter 'ownerAddress' is set
            if (ownerAddress === undefined || ownerAddress === null) {
                throw new Error("Missing the required parameter 'ownerAddress' when calling getNftsByOwnerAddress")
            }

            const pathParams = {
                'nft-address': nftAddress,
                'owner-address': ownerAddress,
            }
            const queryParams = {
                size: opts.size,
                cursor: opts.cursor,
            }
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = PageableNfts

            return this.apiClient.callApi(
                '/v2/contract/nft/{nft-address}/owner/{owner-address}',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }
    }

    return exports
})
