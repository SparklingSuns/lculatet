// 获取以太坊账户的交易计数器
async function getAccountTransactionCount(web3, address) {
  return web3.eth.getTransactionCount(address);
}

// 根据交易哈希获取交易的区块确认状态
async function getTransactionBlockConfirmationStatus(web3, txHash) {
  const tx = await web3.eth.getTransaction(txHash);
  if (!tx) return 'Transaction not found';
  const currentBlockNumber = await web3.eth.getBlockNumber();
  const confirmationCount = currentBlockNumber - tx.blockNumber;
  return confirmationCount > 6 ? 'Confirmed' : 'Unconfirmed';
}