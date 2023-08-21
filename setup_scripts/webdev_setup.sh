#!/bin/bash

# Install Visual Studio Code
sudo snap install --classic code
# Install Node.js
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

# Install NPM
sudo apt install npm

# Install Git
sudo apt install git

# Install Express
npm install express

# Install MongoDB
sudo apt install mongodb

# Install Postman
sudo snap install postman

#Install npx (npm package runner)
sudo npm install -g npx

##echo all pacjages installed and their versions
echo "Visual Studio Code version:"
code --version
echo "Node.js version:"
node --version
echo "NPM version:"
npm --version
echo "Git version:"
git --version
echo "Express version:"
npx express --version
echo "MongoDB version:"
mongod --version
echo "Postman version:"
postman --version
echo "npx version:"
npx --version
