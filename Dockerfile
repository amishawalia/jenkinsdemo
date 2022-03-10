FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
ENV PORT 3000
EXPOSE $PORT
CMD ["npm" ,"start"]