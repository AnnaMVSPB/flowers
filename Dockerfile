FROM node
WORKDIR /application
ENV SECRET=SECRET
ENV DATABASE_URL=postgresql://postgres:u0JRdZmWBTOzKDta@db.nfynckntkdpucpebshlg.supabase.co:5432/postgres
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD [ "node", "app.js"]