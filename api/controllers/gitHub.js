const axios = require('axios');
const to = require('await-to-js').default;

exports.commitList = async (req,res,next) => {
  const owner = req.params.owner;
  const repo = req.params.repo;
  const [errCommit, resultCommit] = await to(axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`));
  if (errCommit) return res.status(500).json(errCommit);
  res.status(200).json(resultCommit.data);
}
