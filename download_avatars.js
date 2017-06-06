var request = require('request');
var fs = require('fs');
var GITHUB_USER = 'donaldma';
var GITHUB_TOKEN = 'eefbcc7bfca09f9c108e2e53463912e95f8d0c78';
var owner = process.argv[2];
var repo = process.argv[3];

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'donaldma'
    },
    json: true
  };
  request.get(options, function(err, response, body){
    cb(err, body);
  });
}

function downloadImageByURL(url, filePath) {
  request(url)
  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors(owner, repo, function(err, body) {
  body.forEach(function(item, index, array){
    downloadImageByURL(item.avatar_url, './images/' + item.login + '.jpg');
  });
});