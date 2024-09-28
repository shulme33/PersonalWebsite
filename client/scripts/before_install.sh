#!/bin/bash
echo "Stopping Nginx and removing old code"

# Stop Nginx
sudo service nginx stop

# Remove old code
#cd /var/www
#sudo rm -r PersonalWebsite_OLD
#sudo mv PersonalWebsite PersonalWebsite_OLD

#deployment_group="24ce635d-cce9-454e-b2cb-49c3d64bfee2"

mrd_dir=$(cat /opt/codedeploy-agent/deployment-root/deployment-instructions/24ce635d-cce9-454e-b2cb-49c3d64bfee2_most_recent_install | grep 24ce635d-cce9-454e-b2cb-49c3d64bfee2)

# Make directory: personalwebsite
sudo mkdir -p /usr/share/nginx/html/personalwebsite

# Delete existing files in nginx directory
sudo rm -rf /usr/share/nginx/html
sudo rm -rf /usr/share/nginx/html/personalwebsite

# Copy files into nginx directory
sudo cp -a $mrd_dir/deployment-archive/build/. /usr/share/nginx/html/personalwebsite
