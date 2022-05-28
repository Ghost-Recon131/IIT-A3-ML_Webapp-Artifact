# Get Nodejs base image
FROM node:17.9.0-alpine

# Set build directory
WORKDIR /frontend

# Add contents of "/app/node_modules/.bin" to $PATH
ENV PATH="./node_modules/.bin:$PATH"

# install dependencies in the provided package.json
COPY package.json ./
COPY package-lock.json ./
RUN npm i

# Add the React App
COPY .. ./

# Expose port 3000 to local port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]