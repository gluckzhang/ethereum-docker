## An NFT Project for Generating Workload

*This project is written according to the [NFT Tutorial Series](https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft).*

All of the following commanrds are executed from the root folder of `assert-nft`.

### Install Dependencies

```bash
npm install
```

### Deploy The NFT Contract

Configure `.env` file first if you need. The public key and private key belong to the first pre-created account (`UTC--2021-11-29T22-08-01.104127929Z--d4a414e8813b9d499aa4dfa1b6ab0e37acc6b9ac` in folder `files/keystore`).

Configure `hardhat.config.js` if you would like to deploy the contract to another network instead of `http://localhost:8545`.


```bash
npx hardhat compile
npx hardhat run scripts/deploy.js
```

After executing the command, you should be able to see something like:

```
Contract deployed to address: CONTRACT_ADDRESS
```

### Mint An NFT

Update file `scripts/mint-nft.js` by replacing `CONTRACT_ADDRESS` with the output of the previous step.

Update the `tokenURI` (line 52) in file `scripts/mint-nft.js` if you would like to mint another NFT.


```bash
node scripts/mint-nft.js
````

A successful execution should give you the hash of the transaction.
