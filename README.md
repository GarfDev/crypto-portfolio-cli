# @garfdev/portfolio-cli

> A standalone toolkit to preview your Portfolio value.

## Installation

All that's needed to install @garfdev/portfolio-cli is to use npm to install it globally. For Linux `sudo` may be required.
```
npm install -g @garfdev/portfolio-cli
```

>Note: Node 10 LTS or greater required.

## Available Commands

CLI supports several commands, each accessible through the `portfolio-cli` command and through npm aliases in **package.json**. For help on individual commands. The commands are:

### `portfolio-cli`

Show current value of all tokens in your loaded Portfolio.<br>

Example response: `{"BTC":"$27,844,307,555.14","XRP":"$360,700.86","ETH":"$1,508,361,907.77"}`

### `portfolio-cli :TOKEN_NAME:` (example: `portfolio-cli ETH`)

Show current value in USD for selected token.

Example response: `$1,509,642,327.85`

### `portfolio-cli :DATE:` (example: `portfolio-cli 8-2-2023`)

Show value of all tokens until specific date

Example response: `{"BTC":"$27,844,307,555.14","XRP":"$360,700.86","ETH":"$1,508,361,907.77"}`

### `portfolio-cli load :PATH_TO_PORTFOLIO_CSV:` (example: `portfolio-cli load /Users/user/Projects/portfolio-cli/README.md`)

Load your Portfolio (for faster query in other operations)

## Development Environment Setup

1. Setup your .env file following .env.example

2. Run `yarn build`, `yarn local` to symlinks development build with your command-line.

3. Test CLI avaibility by typing `portfolio-cli` command in your command-line.

## Technical Desicions

- Why to choose load CSV into sqlite files?
    + To better performance of later queries, also ORM have good support for Application Architecture.
- Why we have `model, managers, controller, services` folders?
    + I want to split logic into different layers
    + `Models` will hold database logics
    + `Managers, Services` will hold application logic
    + Controller will hold busines logics
- What is `CryptoCompareManager`?
    + The first rule of `SOLID` is an module should only responsible for an `actor`, `CryptoCompareManager` should only need to modify when CryptoCompare API changed. To achieve that, I also use the `Open-Close Princible`, `CryptoCompareManager` extends from `ConvertManager`, which uniform methods needed for any later converter to develop. Same princible applied for `LoaderManager`, `CSVLoaderManager`.
- Why `ConvertManager` also extends from `RequestManager`?
    + `RequestManager` contain enough methods to send external request, so extends make later development easier for developer to know which Manager is able to send external requests

## Copyright and License Information

Unless otherwise specified, all content, including all source code files and documentation files in this repository are:

Copyright (c) 2016-2022 LG Electronics

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

Portions of this project are based upon [create-react-app](https://github.com/facebookincubator/create-react-app), Copyright (C) 2016-present Facebook, Inc.