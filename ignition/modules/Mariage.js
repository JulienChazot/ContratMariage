const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ModuleMariage = buildModule("ModuleMariage", (m) => {

  return { Mariage };
});

module.exports = ModuleMariage;