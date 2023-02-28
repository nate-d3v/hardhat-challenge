require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();
require('solidity-coverage');
require('hardhat-deploy');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ARBISCAN_API_KEY = process.env.ARBISCAN_API_KEY;
const ARBITRUM_RPC_URL = process.env.ARBITRUM_RPC_URL;
const ARBITRUM_GOERLI_RPC_URL = process.env.ARBITRUM_GOERLI_RPC_URL;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: {
			chainId: 31337,
			lockConfirmations: 1,
		},
		arbitrum: {
			chainId: 42161,
			blockConfirmations: 1,
			url: ARBITRUM_RPC_URL,
			accounts: [PRIVATE_KEY],
		},
		localhost: {
			chainId: 31337,
		},
		arbitrumGoerli: {
			chainId: 421613,
			blockConfirmations: 1,
			url: ARBITRUM_GOERLI_RPC_URL,
			accounts: [PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: {
			arbitrum: ARBISCAN_API_KEY,
		},
	},
	namedAccounts: {
		deployer: {
			default: 0,
		},
	},
	solidity: '0.8.17',
};
