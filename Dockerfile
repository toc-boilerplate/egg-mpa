FROM docker.ifchange.com/toc/frontend-egg-node-base:1.0.1

WORKDIR /app

COPY . ./

RUN cat hosts.tmp >> /etc/hosts \
    && npm install --production
#ENV ENABLE_NODE_LOG YES
#ENV NODE_LOG_DIR /opt/log/zhinanzhen_v2/logs
CMD npm run dev
