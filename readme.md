# distilled-spec-gcp

A git mirror of Google's [API Discovery Service](https://developers.google.com/discovery). All versions of all APIs are fetched and committed as JSON files so the repo serves as a versioned snapshot of the full discovery catalog.

The mirror is updated every 24 hours and is designed to be used as a stable git submodule.

## Usage as a submodule

```sh
git submodule add https://github.com/alchemy-run/distilled-spec-gcp.git
```

## Updating specs

From `.meta/`:

```sh
bun install
bun run fetch-specs
```
