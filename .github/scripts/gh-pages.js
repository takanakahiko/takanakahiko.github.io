var ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'master',
    user: {
        name: process.env.GIT_NAME,
        email: process.env.GIT_EMAIL
    },
    repo: 'https://' + process.env.GITHUB_TOKEN_FOR_ACTION + '@github.com/' + process.env.GITHUB_REPOSITORY + '.git',
    dotfiles: true,
    silent: true
}, function(err) { console.log(err) });
