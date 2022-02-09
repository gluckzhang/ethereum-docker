#!/bin/bash

set -e -x

BS_IP=`getent hosts bootstrap | awk '{ print $1 }'`
BESU_OPTS=${@/BS_IP/$BS_IP}
besu --data-path=~/opt/besu/devchain --genesis-file=/opt/besu/genesis.json $BESU_OPTS