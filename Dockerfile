# Stage 1: Build the application
FROM node:22 as build

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies in the Docker container
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:22-slim

WORKDIR /app

# Copy the build from the first stage
COPY --from=build /app/dist /app

EXPOSE 3000

# Use the serve command directly if it's part of your dependencies
CMD ["npx", "serve", "-s", ".", "-l", "3000"]