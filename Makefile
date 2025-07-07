# Default target
.PHONY: all
all: build up

# Build the Docker image
.PHONY: build
build:
	docker compose up -d --build
	

# Start the app in detached mode
.PHONY: up
up:
	docker compose up -d

# Stop the app
.PHONY: down
down:
	docker compose down

# View logs
.PHONY: logs
logs:
	docker compose logs

# Clean up (stop and remove containers, networks, and volumes)
.PHONY: clean
clean:
	docker image prune -a -f
	docker container prune -f
	docker volume prune -f

# Rebuild and restart
.PHONY: rebuild
rebuild: build

# Check container status
.PHONY: ps
ps:
	docker-compose ps

# Help
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make build   - Build the Docker image"
	@echo "  make up      - Start the app in detached mode"
	@echo "  make down    - Stop the app"
	@echo "  make logs    - View container logs"
	@echo "  make clean   - Stop and remove containers, networks, and volumes"
	@echo "  make rebuild - Rebuild and restart the app"
	@echo "  make ps      - Check container status"
	@echo "  make help    - Show this help message"
