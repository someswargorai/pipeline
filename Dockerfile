# Stage 1: Build the application
FROM node:22 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the application with production dependencies only
FROM node:22-slim

# Set working directory
WORKDIR /app

# Copy only necessary files from build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules


# Expose default Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
