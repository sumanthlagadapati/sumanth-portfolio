#!/bin/bash
sudo yum update -y
sudo yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "Hello from EC2 User Data script!" > /var/www/html/index.html
