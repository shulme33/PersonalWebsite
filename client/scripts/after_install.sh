#!/bin/bash
echo "Running after_install.sh"

# Copy nginx redirect script into correct directory
nginx_conf_file="mbs.samhulme.com.conf"
sudo cp /var/www/personalwebsite/nginx/$nginx_conf_file /etc/nginx/conf.d/$nginx_conf_file


