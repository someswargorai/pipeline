FROM node:22

# Set working directory
WORKDIR /app

# Install dependencies first (for better cache)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose default Next.js dev port
EXPOSE 3000

# Start the dev server
CMD ["npm", "run", "dev"]
