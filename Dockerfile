# Use the official Node.js image as the base image
FROM node:18 as build

RUN echo "using dockerfile"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install
RUN npm install -g @angular/cli

# Copy the entire project to the container
COPY . .

# Build the Angular app for production
RUN ng build

# Use a smaller, production-ready image as the final image
FROM nginx:alpine

# Copy the production-ready Angular app to the Nginx webserver's root directory
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/frontend/3rdpartylicenses.txt /usr/share/nginx/html
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
