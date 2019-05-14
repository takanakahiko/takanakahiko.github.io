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

# Filter for dev branch
action "Dev" {
  needs = "Build"
  uses = "actions/bin/filter@master"
  args = "branch dev"
}

action "Deploy" {
  needs = "Dev"
  uses = "docker://node:latest"
  runs = "node ./.github/scripts/gh-pages.js"
  secrets = ["TOKEN_FOR_ACTION"]
  env = {
    GIT_NAME   = "takanakahiko-machine"
    GIT_EMAILE = "takanakahiko+machine@gmail.com"
  }
}
