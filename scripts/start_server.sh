#!/bin/bash
echo "Starting Nginx and PM2"

# Navigate to the client directory
cd /var/www/PersonalWebsite/client

# Install frontend dependencies
#sudo npm install

# Build the React app
sudo npm run build

# Start the backend server with pm2
cd /var/www/PersonalWebsite
pm2 start app.js

# Restart Nginx
sudo service nginx start
