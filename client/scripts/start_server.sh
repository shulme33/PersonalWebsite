#!/bin/bash
echo "Starting Nginx and PM2"

# Restart Nginx
sudo service nginx start
sudo systemctl reload nginx