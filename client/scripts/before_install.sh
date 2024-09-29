#!/bin/bash
echo "Stopping Nginx and removing old code"

# Values
file_dir="/var/www/personalwebsite"
nginx_conf_file="mbs.samhulme.com.conf"
project_build_dir="24ce635d-cce9-454e-b2cb-49c3d64bfee2"  # Get from server
most_recent_install_file="/opt/codedeploy-agent/deployment-root/deployment-instructions/"$project_build_dir"_most_recent_install"

# Stop Nginx
sudo service nginx stop

# Get directory of most recent build
mrd_dir=$(cat $most_recent_install_file | grep $project_build_dir)

# Delete existing files in nginx directory
sudo rm -rf $file_dir
sudo rm -f /etc/nginx/conf.d/$nginx_conf_file

# Make directory if doesn't exist: /var/www/personalwebsite
sudo mkdir -p /var
sudo mkdir -p /var/www
sudo mkdir -p $file_dir

# Copy files into nginx directory
sudo cp -a $mrd_dir/deployment-archive/build/. $file_dir

# Copy nginx redirect script into correct directory
sudo cp $mrd_dir/deployment-archive/nginx/$nginx_conf_file /etc/nginx/conf.d/$nginx_conf_file
