var ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/' + process.env.GITHUB_REPOSITORY + '.git',
    dotfiles: true
}, function(err) { console.log(err) });
