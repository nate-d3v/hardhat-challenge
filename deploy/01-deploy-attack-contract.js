const { network } = require('hardhat');

module.exports = async function ({ getNamedAccounts, deployments }) {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();

	const args = [];
	const attackContract = await deploy('AttackContract', {
		from: deployer,
		args: args,
		log: true,
		waitConfirmations: network.config.blockConfirmations || 1,
	});

	log(`Contract deployed at ${attackContract.address}`);
};
