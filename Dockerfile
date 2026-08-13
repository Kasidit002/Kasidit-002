FROM node:20-alpine AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=dependencies /app/node_modules ./node_modules
COPY package*.json ./
COPY src/ ./src/

EXPOSE 3000

USER node

CMD ["npm", "start"]
