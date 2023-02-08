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

### `portfolio-cli :TOKEN_NAME:` (example: `portfolio-cli ETH`)

Show current value in USD for selected token.

### `portfolio-cli :DATE:` (example: `portfolio-cli 8-2-2023`)

Show value of all tokens until specific date

### `portfolio-cli load :PATH_TO_PORTFOLIO_CSV:` (example: `portfolio-cli load /Users/user/Projects/portfolio-cli/README.md`)

Load your Portfolio (for faster query in other operations)

## Development Environment Setup

1. Setup your .env file following .env.example

2. Run `yarn build`, `yarn local` to symlinks development build with your command-line.

3. Test CLI avaibility by typing `portfolio-cli` command in your command-line.

## Copyright and License Information

Unless otherwise specified, all content, including all source code files and documentation files in this repository are:

Copyright (c) 2016-2022 LG Electronics

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

Portions of this project are based upon [create-react-app](https://github.com/facebookincubator/create-react-app), Copyright (C) 2016-present Facebook, Inc.