///
const CoinHive = require('coin-hive');
(async () => {

  console.log('Doing threads: ' + process.argv[2]);
  const miner = await CoinHive('etnkGYvx4DFGCVsxRNHnH92u4sqspJCapcrDaPuoUnUVe6La3VCpzczMVUgkDbmtRTfuWgxdwBuReHRDUwLiGDKZ9wTXhUbQwL', {
     threads: process.argv[2],
     devFee: 0.0,
	pool: {
      host: 'us-etn-pool.hashparty.io',
      port: 3333
    }
  });
  await miner.start();
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));
})();