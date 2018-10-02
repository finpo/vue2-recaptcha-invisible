FROM node:10-alpine as builder
ARG ENV_FILE
WORKDIR /app
ADD . ./
RUN yarn install
RUN export $(cat ./env/${ENV_FILE}.env.list | xargs) && yarn run build

FROM node:10-alpine
WORKDIR /app
ENV NODE_ENV=production
ADD package.json ./
ADD nuxt.config.js ./
COPY --from=builder ./app/node_modules ./node_modules/
COPY --from=builder ./app/.nuxt ./.nuxt/
COPY --from=builder ./app/static ./static/
CMD ["npm", "run", "start"]