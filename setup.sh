#!/usr/bin/env bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $CURRENT_DIR/server
yarn
$CURRENT_DIR/server/node_modules/.bin/sequelize --config ./src/db/config.js --migrations-path ./src/db/migrations db:migrate

cd $CURRENT_DIR/client
yarn
