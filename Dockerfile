FROM oven/bun:latest as builder
WORKDIR /app

ARG API_URL

ENV VITE_API_URL=${API_URL}
COPY bun.lockb package.json ./
RUN bun install
COPY . .
RUN bun run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
