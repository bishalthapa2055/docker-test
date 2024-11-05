# Use an official Node.js image as the base
FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --include=dev

# Copy the rest of the application code
COPY . .


# Build the TypeScript code
RUN npm run build

# Expose the port your application will run on (replace 3000 with your application's port)
EXPOSE 8080

# Specify the command to run your application
CMD ["npm", "start"]