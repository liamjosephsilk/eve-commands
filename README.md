# Eve Commands

CLI for working with Shopify 2.0 stores.

## Getting Started

Install Globally:

`npm i eve-commands -g`

## Commands

### Section

Create a section liquid template:

eve section [name] [args]

`eve section test`.

This command will create a `test.liquid` file in `/sections`.

To add a corresponding Javascript asset, pass the `-js` flag.

`eve section test -js`.

This will add a `test.liquid` file to `/sections`, as well as create a `test.js` file in the `/assets` directory.

## Config

You may be working with a build tool, wherby your Javascript and CSS assets may live in a differnt directory. In this instance, you can add an `eve-config.yaml` file. The file has to contain and `assetPath` key, with a a reference to the path.

```yaml
assetPath: "src/scripts/sections"
```
