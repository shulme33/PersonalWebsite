#!/bin/bash
echo "Stopping Nginx and removing old code"

# Stop Nginx
sudo service nginx stop

# Remove old code
cd /var/www
sudo rm -r PersonalWebsite_OLD
sudo mv PersonalWebsite PersonalWebsite_OLD
