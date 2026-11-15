# hello-deployvera

A tiny Node.js app for trying [DeployVera](https://deployvera.com) deploys from Claude, Cursor or any MCP client through the [DeployVera MCP server](https://github.com/deployvera/deployvera-mcp).

- `GET /` prints a greeting (set with the `GREETING` environment variable) and the deployed commit.
- `GET /healthz` returns `{"status":"ok"}`.

Create a project from this repository in the DeployVera panel, connect the DeployVera connector, then try:

- "List my DeployVera projects."
- "Set GREETING to 'Hi reviewer' on hello-deployvera, then deploy and wait for the build."
- "Why did the last build fail?" (after pushing a broken commit)
- "Roll back hello-deployvera to the previous build." (asks for your approval in the browser)

MIT licensed.
