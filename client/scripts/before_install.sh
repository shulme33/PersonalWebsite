#!/bin/bash
echo "Stopping Nginx and removing old code"

# Values
file_dir="/var/www/personalwebsite"
nginx_conf_file="mbs.samhulme.com.conf"
project_build_dir="24ce635d-cce9-454e-b2cb-49c3d64bfee2"  # Get from server
most_recent_install_file="/opt/codedeploy-agent/deployment-root/deployment-instructions/"$project_build_dir"_most_recent_install"

# Stop Nginx
sudo service nginx stop

# Copy nginx redirect script into correct directory
sudo cp /var/www/personalwebsite/nginx/$nginx_conf_file /etc/nginx/conf.d/$nginx_conf_file
