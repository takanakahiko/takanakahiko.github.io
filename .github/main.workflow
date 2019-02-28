workflow "Install, Build, and Deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install" {
  uses = "docker://node:latest"
  runs = "npm ci"
}

action "Build" {
  needs = "Install"
  uses = "docker://node:latest"
  runs = "npm run generate"
}

action "Git Setup" {
  uses = "docker://node:latest"
  env = {
    GIT_NAME   = "takanakahiko-machine"
    GIT_EMAILE = "takanakahiko+machine@gmail.com"
  }
  runs = "./.github/scripts/git-setup.sh"
}

action "Deploy" {
  needs = ["Build", "Git Setup"]
  uses = "docker://node:latest"
  runs = "node ./.github/scripts/gh-pages.js"
  secrets = ["GITHUB_TOKEN"]
}