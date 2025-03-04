# # remove default nginx page
# rm /etc/nginx/sites-enabled/default

# # create apps
# dokku apps:create app

# # add ssh-key to dokku
# echo $PUBLIC_KEY | dokku ssh-keys:add admin


# # add env variables
# NEXTAUTH_SECRET=$(openssl rand -base64 20 | tr -d '+/=')
# NEXTAUTH_URL=https://consultorio-psi.citistaging.com
# dokku config:set app NEXTAUTH_SECRET=$NEXTAUTH_SECRET NEXTAUTH_URL=$NEXTAUTH_URL

# # setup swap memory

# cd /var
# touch swap.img
# chmod 600 swap.img

# dd if=/dev/zero of=/var/swap.img bs=1024k count=1000
# mkswap /var/swap.img
# swapon /var/swap.img
# free

# echo "/var/swap.img    none    swap    sw    0    0" >> /etc/fstab

# # setup database
# dokku plugin:install https://github.com/dokku/dokku-postgres.git
# dokku postgres:create app-db
# dokku postgres:link app-db app

# # setup ports and domains
# dokku proxy:ports-add app http:80:3000

# dokku domains:report app | grep packer | awk '{print $NF}' | xargs -I {} dokku domains:remove app {}
# dokku domains:add app consultorio-psi.citistaging.com

# # SETUP SSL
# dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
# dokku letsencrypt:set app email tmsl@cin.ufpe.br
# dokku letsencrypt:enable app
# dokku letsencrypt:cron-job --add
# dokku letsencrypt:auto-renew app