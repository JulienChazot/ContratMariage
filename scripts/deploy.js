const path = require("path");
const fs = require("fs");
const { ethers } = require("ethers");

async function main() {
  // Récupérer les arguments du réseau
  console.log(ethers);
  const [deployer] = await ethers.Signers();
  console.log("Déploiement des contrats avec le compte :", await deployer.getAddress());

  // Compiler le contrat ContratMariage
  const ContratMariage = await ethers.getContractFactory("Mariage");
  const contratMariage = await ContratMariage.deploy();
  await contratMariage.deployed();

  console.log("Contrat ContratMariage déployé à l'adresse :", contratMariage.address);

  // Sauvegarde des fichiers frontend
  saveFrontendFiles(contratMariage);
}

function saveFrontendFiles(contratMariage) {
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ ContratMariage: contratMariage.address }, null, 2)
  );

  const ContratMariageArtifact = {
    abi: contratMariage.interface.format("json"),
    bytecode: contratMariage.bytecode
  };

  fs.writeFileSync(
    path.join(contractsDir, "ContratMariage.json"),
    JSON.stringify(ContratMariageArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
