require('dotenv').config()

const path = require('path')
const release = require('github-pr-release')

const head = process.argv[2]
if (!head) {
  process.exit(1)
}

const config = {
  token: process.env.GITHUB_API_TOKEN,
  owner: 'fmy',
  repo:  'gh-pr-release-test',
  head,
  base:  'release',
  template: path.join(__dirname, 'pr-release.mustache'),
  collectAllPRs: true,
}

release(config).then(function (pullRequest) {
  // success
  console.log(pullRequest)
}).catch(console.error)

