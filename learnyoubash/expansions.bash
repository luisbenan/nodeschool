#!/usr/bin/env bash

RESULT=$(( ($2) * ($3 + $4) ))

echo project-{$RESULT}{dest, src, test}{index.js, util.js}
