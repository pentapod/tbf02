#!/bin/bash

set -e

ADDR="http://localhost:30030"
DEST_DIR="dist"
PAGES_DIR="pages"
STATIC_DIR="static"

cd $(dirname $0)/..

echo "starting server..."
node_modules/.bin/next build
node_modules/.bin/next start -p 30030 2>&1 > /dev/null &
#NEXT_PID=$!
#NEXT_PGID=$(ps -aeo pid,pgid | grep -E "$NEXT_PID\s+[0-9]+" | sed "s/$NEXT_PID\s\+\([0-9]\+\)/\1/g")

echo "downloading static assets..."
rm -rf $DEST_DIR
set +e
wget --html-extension \
     --recursive \
     --page-requisites \
     --no-parent \
     --directory-prefix "$DEST_DIR" \
     --no-host-directories \
     --restrict-file-names=unix \
     --quiet \
     --retry-connrefused \
     --waitretry 2 \
     --tries 5 \
     -i <(find "$PAGES_DIR" -type f | \
                 sed "s:^$PAGES_DIR\(.*\)\.js\$:\1:g" | \
                 sed 's:/index$:/:g' | \
                 sed "s,\(.*\),$ADDR\1,g")
set -e

echo "closing server..."
pkill -INT -g $$ node
#pkill -INT -g $NEXT_PGID
wait

echo "copying static files.."
mkdir -p $DEST_DIR/static
cp -r $STATIC_DIR/* $DEST_DIR/static

# prevent using jekyll on github pages
touch $DEST_DIR/.nojekyll

echo "done"
