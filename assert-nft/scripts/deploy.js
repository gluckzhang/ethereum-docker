async function main() {
  const ASSERTNFT = await ethers.getContractFactory("ASSERTNFT")

  // Start deployment, returning a promise that resolves to a contract object
  const assertNFT = await ASSERTNFT.deploy()
  console.log("Contract deployed to address:", assertNFT.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
