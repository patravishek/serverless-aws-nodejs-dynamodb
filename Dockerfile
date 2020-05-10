FROM node:12.14.1
# make sure the package repository is up to date and update ubuntu
RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt-get update && \
  apt-get -y upgrade
RUN apt-get install -y curl git htop man software-properties-common unzip vim wget

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_ALL en_US.UTF-8
ENV HOME /root

# supervisor installation && 
# create directory for child images to store configuration in
RUN apt-get -y install supervisor && \
  mkdir -p /var/log/supervisor && \
  mkdir -p /etc/supervisor/conf.d

# supervisor base configuration
ADD supervisor.conf /etc/supervisor.conf

#setting up working directory
WORKDIR /usr/src/app
COPY . .
RUN apt-get update
RUN apt-get -y install default-jdk
RUN npm install
RUN npm install -g serverless && \
    npm install -g serverless-offline 

RUN serverless dynamodb install

EXPOSE 3000

ENV DYNAMODB_TABLE=todos-table
ENV IS_OFFLINE=true
# CMD [ "./node_modules/.bin/jest" ]
CMD ["supervisord", "-c", "/etc/supervisor.conf"]