#!/bin/bash
env=$1
export EGG_SERVER_ENV=$env
if [ $env == 'test' ];then
    echo '10.9.10.2 api-ka.testing2.cheng95.net' >> /etc/hosts
elif [ $env == 'stage' ];then
    export EGG_SERVER_ENV=local
    echo '192.168.1.110 wtt.ka.wk.dev.cheng95.com' >> /etc/hosts
elif [ $env == 'prod' ];then
    echo '192.168.8.2 api-ka.cheng95.net' >> /etc/hosts
fi
npm run docker-start
