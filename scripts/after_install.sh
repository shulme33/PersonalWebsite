#!/bin/bash
echo "Cloning new code and installing backend dependencies"

# Clone new code
#sudo git clone https://github.com/shulme33/PersonalWebsite.git /var/www/PersonalWebsite

# Navigate to the directory
cd /var/www/PersonalWebsite

# Kill existing pm2 processes
pm2 kill

# Install backend dependencies
#sudo npm install
