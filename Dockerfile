# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and lock file first (for caching layer)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source
COPY . .

# Build the app using Babel
RUN npm run build

# Run the compiled code
CMD ["npm", "run", "prod"]
