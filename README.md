# Hardhat Boilerplate

This repository contains a sample project that you can use as the starting point
for your Ethereum project. It's also a great fit for learning the basics of
smart contract development.

This project is intended to be used with the
[Hardhat Beginners Tutorial](https://hardhat.org/tutorial), but you should be
able to follow it by yourself by reading the README and exploring its
`contracts`, `tests`, `scripts` and `frontend` directories.

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/NomicFoundation/hardhat-boilerplate.git
cd hardhat-boilerplate
npm install
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. You will
need to have [Coinbase Wallet](https://www.coinbase.com/wallet) or [Metamask](https://metamask.io) installed and listening to
`localhost 8545`.

## User Guide

You can find detailed instructions on using this repository and many tips in [its documentation](https://hardhat.org/tutorial).

- [Writing and compiling contracts](https://hardhat.org/tutorial/writing-and-compiling-contracts/)
- [Setting up the environment](https://hardhat.org/tutorial/setting-up-the-environment/)
- [Testing Contracts](https://hardhat.org/tutorial/testing-contracts/)
- [Setting up your wallet](https://hardhat.org/tutorial/boilerplate-project#how-to-use-it)
- [Hardhat's full documentation](https://hardhat.org/docs/)

For a complete introduction to Hardhat, refer to [this guide](https://hardhat.org/getting-started/#overview).

## What's Included?

This repository uses our recommended hardhat setup, by using our [`@nomicfoundation/hardhat-toolbox`](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox). When you use this plugin, you'll be able to:

- Deploy and interact with your contracts using [ethers.js](https://docs.ethers.io/v5/) and the [`hardhat-ethers`](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-ethers) plugin.
- Test your contracts with [Mocha](https://mochajs.org/), [Chai](https://chaijs.com/) and our own [Hardhat Chai Matchers](https://hardhat.org/hardhat-chai-matchers) plugin.
- Interact with Hardhat Network with our [Hardhat Network Helpers](https://hardhat.org/hardhat-network-helpers).
- Verify the source code of your contracts with the [hardhat-etherscan](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan) plugin.
- Get metrics on the gas used by your contracts with the [hardhat-gas-reporter](https://github.com/cgewecke/hardhat-gas-reporter) plugin.
- Measure your tests coverage with [solidity-coverage](https://github.com/sc-forks/solidity-coverage).

This project also includes [a sample frontend/Dapp](./frontend), which uses [Create React App](https://github.com/facebook/create-react-app).

## Troubleshooting

- `Invalid nonce` errors: if you are seeing this error on the `npx hardhat node`
  console, try resetting your Metamask account. This will reset the account's
  transaction history and also the nonce. Open Metamask, click on your account
  followed by `Settings > Advanced > Clear activity tab data`.

## Setting up your editor

[Hardhat for Visual Studio Code](https://hardhat.org/hardhat-vscode) is the official Hardhat extension that adds advanced support for Solidity to VSCode. If you use Visual Studio Code, give it a try!

## Getting help and updates

If you need help with this project, or with Hardhat in general, please read [this guide](https://hardhat.org/hardhat-runner/docs/guides/getting-help) to learn where and how to get it.

For the latest news about Hardhat, [follow us on Twitter](https://twitter.com/HardhatHQ), and don't forget to star [our GitHub repository](https://github.com/NomicFoundation/hardhat)!

**Happy _building_!**


# Mon travail :

En plus du cours et de tous ce qu'on a fait ensemble j'ai fais :

- Développer le front de mon contrat :
  - Nom prénom des 2 parties 
  - Date et lieu de naissance des 2 parties
  - Checkbox pour divorce
  - Ajouter des enfants au couple
  - Cocher les enfants pour le donner un héritage
  - Valider le contrat

- Une erreur est arrivée pour déployer mon contrat sur Sepolia : 
  - J'ai donc mis mes variables de npx en dur car la version n'arrive pas à récupérer les variables de l'ordinateur.
  - J'avais toujours une erreur même après avoir configurer mon deploy.js
  - Il m'informe que 'ether.Signers' n'est pas une fonction mais dans ma console.log(ethers) il me renvoi : "Signer: [Getter]"
  - Je comprends donc pas pourquoi il ne veux pas déployer

- Erreur provenant de hardhat.config ?
  - Pour vérifier ça, j'ai mis des consoles.log dans mon hardhat.config.js, ils ressortaient tous, au début comme ça la fin de mon fichier, donc je pense que l'erreur ne vient pas d'ici.

- Mes tentatives de réparation :
  - J'ai déinstallé node_modules puis réinstallé npm install / sans succès
  - J'ai tenté de cloner mon projet en réinstallant npm sur me nouveau dossier, j'ai la même erreur
  - J'ai essayé d'installer ether 5.0, même erreur (npm install ethers@5.0)
  - J'ai essayé d'installer la dernière version d'ether (npm install ethers@latest)
  - J'ai tenté de suivre à nouveau le tuto du Read.me dans un nouveau dossier en important mes fichiers. Même erreur

Rappel : 
On a essayé de débugué tous les deux cet erreur mais on n'a rien trouvé...

Erreur :
TypeError: ethers.Signers is not a function
    at main (C:\Users\Julien\Desktop\Isitech\BlockChainHardHat\hardhat-boilerplate\scripts\deploy.js:8:35)
    at Object.<anonymous> (C:\Users\Julien\Desktop\Isitech\BlockChainHardHat\hardhat-boilerplate\scripts\deploy.js:44:1)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Function.Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
