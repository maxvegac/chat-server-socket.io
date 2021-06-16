FROM node:14 as builder
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM gcr.io/distroless/nodejs:14
COPY --from=builder /app/build /app
COPY --from=builder /app/node_modules /app/node_modules
WORKDIR /app
CMD ["index.js"]
