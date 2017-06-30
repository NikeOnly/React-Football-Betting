#!/bin/bash

# clean & create the project folder
rm -rf distribution
mkdir -p distribution/football-betting

# copy all server mock data
rm -rf mock-server-api/node_modules
cp -R mock-server-api distribution/football-betting

# copy all src files
cp -R src distribution/football-betting
# copy all build stuff also
cp package.json distribution/football-betting
cp *.js distribution/football-betting
cp README.md distribution/football-betting

# zip it
cd distribution
zip -r football-betting{.zip,}
cd ..

# delete zipped files
rm -rf distribution/football-betting
