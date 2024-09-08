FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your app will run on
EXPOSE 8001

# Start the application
CMD ["npm", "run", "start"]
