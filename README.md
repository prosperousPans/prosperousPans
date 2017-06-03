# Pursumé


What makes you unique? What puts you in the spotlight? Why do others want pursue you? With Pursumé, you can remove the shrouds of your identity by allowing others to tell you what makes your stand out. Then, connect with people that share common experiences to synergize your network reach.

Pursumé: Be Pursued!


## Team

- Rajas Kale
- Lavanya AC
- Alan Zheng

## Roadmap

View the project roadmap [here](https://trello.com/prosperouspans)

## App Plan

View the app plan [here](https://docs.google.com/document/d/13wJne-dF-h_GpNHzrMkBzsyKa66tDggbU8HPunhyaH8/edit#heading=h.kdpea8yi6wmv)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)

## Usage

> Some usage instructions

## Requirements

- Node 6.9.x
- Redis 3.2.x
- Postgresql 9.6.x
- etc

## Development

### Installing System Dependencies

```
brew install yarn
brew install redis
brew install postgresql
```

Yarn is a replacement for npm. It's faster and *guarantees* consistency -- as you deploy your code in various environments, you won't run the risk of slight variations in what gets installed.

### Install Project Dependencies

```
yarn global add grunt-cli knex eslint
```
## App Configuration

 Override settings `config/default.json` in any environment by making a copy of `config/ENV.example.json` and naming it `config/ENV.json` and setting the appropriate variable.

 For environments that require use of environment variables, you can supply variables as defined in `config/custom-environment-variables.json`.

 See https://www.npmjs.com/package/config
 And https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables

## Database Initialization

IMPORTANT: ensure `postgres` is running before performing these steps.

### Database Creation:

Use grunt to create a new database for your development and test environments:

Development environment: `grunt pgcreatedb:default`

Other environments, specify like so: `NODE_ENV=test grunt pgcreatedb:default`

### Run Migrations & Data Seeds

In terminal, from the root directory:

`knex migrate:latest --env NODE_ENV`

`knex migrate:rollback --env NODE_ENV`

`knex seed:run --env NODE_ENV`

Note: `--env NODE_ENV` may be omitted for development. For example, `knex migrate:latest` will run all migrations in the development environment, while `knex migrate:latest --env test` will migrate in the test environment.

## Running the App

To run webpack build: `yarn run build`

To run server: `yarn run start`

To run tests: `yarn run test`

To run your redis server for the session store `redis-server`
