# envatreactjs

Run **package.json** **scripts** by `NODE_ENV`.

## Installation

Install with **npm**:

```sh
npm install envatreactjs
```

## Features

- [x] Read `NODE_ENV` as environment variable from `process.env`.
- [x] Read `NODE_ENV` from **.env** file in your project root directory.
- [x] Defaults `NODE_ENV` to `development`.
- [x] Customize `process.env` for each `NODE_ENV`.
- [x] Clearer, concise **scripts** in **package.json**.
- [x] No more **Bash** scripting in **package.json**.
- [x] Works on **Linux**, **macOS**, and **Windows**.
- [x] Compatible with **npm**, **pnpm**, and **Yarn**.
- [x] Consistent workflow for any `NODE_ENV`:
  1. `npm install` or `pnpm install` or `yarn install`.
  2. `npm start` or `pnpm start` or `yarn start`.

## Problem

Environments projects ReactJs .env

## Solution

Install envatreactjs.
Create .env
Write variables at file .env with 'APP_' before variables


Ex: 
    APP_HOST=localhost, 
    APP_SECURE_KEY=fLNA&OFB#OF#OVB@VB*


## Notes

- **by-node-env** is essentially a clone of [**per-env**](https://www.npmjs.com/package/per-env) with some notable fixes:

  - **.env** (`NODE_ENV` only) support.
  - **pnpm** compatibility.
  - **Windows** compatibility.
  - **Yarn** compatibility.

- The **.env** file is parsed using [**dotenv**](https://www.npmjs.com/package/dotenv).

- This package might support more **.env** files in the future, as documented by **create-react-app** [here](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#what-other-env-files-can-be-used).

- Option to specify a custom file path for the **.env** file is not yet implemented, please raise an issue or PR if you need this feature.

Contact
André Braga
dnk_vip@hotmail.com
