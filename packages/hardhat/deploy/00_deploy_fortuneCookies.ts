import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "fortuneCookies" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployFortuneCookies: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("fortuneCookies", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const fortuneCookies = await hre.ethers.getContract<Contract>("fortuneCookies", deployer);
  console.log("🍪 FortuneCookies contract deployed to:", fortuneCookies.address);
};

export default deployFortuneCookies;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags fortuneCookies
deployFortuneCookies.tags = ["fortuneCookies"];
