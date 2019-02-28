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

action "Deploy" {
  needs = "Build"
  uses = "docker://node:latest"
  runs = "node ./.github/scripts/gh-pages.js"
  secrets = ["GITHUB_TOKEN_FOR_ACTION"]
  env = {
    GIT_NAME   = "takanakahiko"
    GIT_EMAILE = "takanakahiko@users.noreply.github.com"
  }
}
