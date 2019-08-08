const release = require('github-pr-release')

const config = {
  token: '',
  owner: 'fmy',
  repo:  'gh-pr-release-test',
  head:  'master',
  base:  'release',
}

release(config).then(function (pullRequest) {
  // success
  console.log(pullRequest)
})

