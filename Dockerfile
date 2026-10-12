# base image
FROM node:24.19.0-alpine
# working directir
WORKDIR /app

#copy
COPY package*.json ./


# run
RUN npm install
RUN npm install -g @expo/ngrok
COPY . .
# port 
EXPOSE 8081
#command
CMD ["npx", "expo", "start", "--tunnel"]  
