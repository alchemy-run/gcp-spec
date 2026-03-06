# gcp-spec

A git mirror of Google's [API Discovery Service](https://developers.google.com/discovery). All versions of all APIs are fetched and committed as JSON files so the repo serves as a versioned snapshot of the full discovery catalog.

Because it's a plain git repo with commit history, you can pin to a specific commit and use it as a stable git submodule.

## Usage as a submodule

```sh
git submodule add https://github.com/alchemy/gcp-spec.git
```

## Updating specs

From `.meta/`:

```sh
bun install
bun run fetch-specs
```
