require('dotenv').config()

const release = require('github-pr-release')

const config = {
  token: process.env.GITHUB_API_TOKEN,
  owner: 'fmy',
  repo:  'gh-pr-release-test',
  head:  'master',
  base:  'release',
}

release(config).then(function (pullRequest) {
  // success
  console.log(pullRequest)
})

