# Development stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Set build arguments for environment variables
ARG VITE_API_URL
ARG PORT

# Set environment variables
ENV VITE_API_URL=$VITE_API_URL
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