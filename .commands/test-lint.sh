#!/bin/bash

set -e

ARGUMENTS="$@"

# scripts
eslint --quiet $ARGUMENTS scripts/
# tests
eslint --quiet $ARGUMENTS tests/
eslint --quiet $ARGUMENTS integration/
# documentation
eslint --quiet $ARGUMENTS jsDoc/
eslint --quiet $ARGUMENTS docs/