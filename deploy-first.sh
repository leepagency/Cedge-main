#!/bin/bash
# Complete guide for deploying a Next.js app to Ubuntu EC2

# STEP 1: Connect to your EC2 instance
# Replace with your EC2 instance's public IP and path to your .pem file
# ssh -i /path/to/your-key.pem ubuntu@your-ec2-public-ip

# STEP 2: Update the system
sudo apt update
sudo apt upgrade -y

# STEP 3: Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
# Verify installation
node -v
npm -v

# STEP 4: Install PM2 (Process Manager)
sudo npm install -g pm2

# STEP 5: Install Git
sudo apt install -y git

# STEP 6: Clone your Next.js repository
# Replace with your repository URL
git clone https://github.com/yourusername/your-nextjs-app.git
cd your-nextjs-app

# STEP 7: Install dependencies
npm install

# STEP 8: Build your Next.js application
npm run build

# STEP 9: Start your application with PM2
pm2 start npm --name "nextjs-app" -- start

# STEP 10: Set up PM2 to start on boot
pm2 startup
# Run the command that PM2 outputs

# STEP 11: Save the PM2 configuration
pm2 save

# STEP 12: Set up Nginx as a reverse proxy
sudo apt install -y nginx

# Create Nginx configuration file
sudo tee /etc/nginx/sites-available/nextjs <<EOF
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    # If you don't have a domain yet, you can use your EC2 public IP

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
sudo ln -s /etc/nginx/sites-available/nextjs /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# STEP 13: Set up firewall
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable

# STEP 14: Set up SSL with Let's Encrypt (optional but recommended)
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
# Follow the interactive prompts

# STEP 15: Verify deployment
echo "Your Next.js application is now deployed!"
echo "You can access it at: http://your-ec2-public-ip or http://your-domain.com"