#!/bin/bash
echo "Stopping Nginx and removing old code"

# Stop Nginx
sudo service nginx stop

mkdir /var/www/personalwebsite
sudo chown -R ec2-user:ec2-user /var/www/personalwebsite
