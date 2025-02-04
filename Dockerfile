# Development stage
FROM node:18-alpine3.18

# Set working directory
WORKDIR /app

ARG PORT

ENV PORT=$PORT

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE $PORT

# Build the application
RUN npm run build

# Serve the application (you'll need to install a static file server)
RUN npm install -g serve

# Start the server (using shell form to evaluate environment variable)
CMD [ "serve", "-s", "dist" ]