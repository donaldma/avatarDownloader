const request = require('request');
const fs = require('fs');
const GITHUB_USER = 'donaldma';
const GITHUB_TOKEN = 'eefbcc7bfca09f9c108e2e53463912e95f8d0c78';
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + "jquery" + '/' + "jquery" + '/contributors';
var emptyArr = [];

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: requestURL,
    headers: {
      'User-Agent' : 'donaldma'
    }
  };
  request.get(options, cb)
};


getRepoContributors("jquery", "jquery", function (err, result){
  var img = JSON.parse(result.body);
  img.forEach(function(item, index, array) {
  //   emptyArr.push(item.avatar_url);
    console.log(item.avatar_url)
  })
});

