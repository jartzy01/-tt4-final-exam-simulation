# --- Stage 1: Build the Angular app ---
    FROM node:18-alpine AS build
    WORKDIR /app
    COPY ./task-manager-frontend/ .   
    RUN npm install && npm run build --prod
    
    # --- Stage 2: Serve the Angular app with Nginx ---
    FROM nginx:alpine
    COPY --from=build /app/dist/task-manager-frontend /usr/share/nginx/html
    