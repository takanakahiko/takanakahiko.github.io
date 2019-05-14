workflow "Install, Build, and Deploy" {
  on = "push"
  resolves = ["Deploy"]
}

workflow "Install and Build" {
  on = "check_run"
  resolves = ["Build"]
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

# Filter for master branch
action "Master" {
  needs = "Build"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Deploy" {
  needs = "Master"
  uses = "docker://node:latest"
  runs = "node ./.github/scripts/gh-pages.js"
  secrets = ["TOKEN_FOR_ACTION"]
  env = {
    GIT_NAME   = "takanakahiko-machine"
    GIT_EMAILE = "takanakahiko+machine@gmail.com"
  }
}
