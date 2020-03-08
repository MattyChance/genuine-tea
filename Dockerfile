FROM node:12-slim
EXPOSE 4000

RUN mkdir /code
WORKDIR /code

COPY . .

RUN yarn install
CMD ["yarn","run", "ts-node", "src/index.ts"]
