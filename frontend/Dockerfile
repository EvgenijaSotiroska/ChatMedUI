FROM node:18-alpine
LABEL maintainer="github.com/EvgenijaSotiroska" \
      description="Frontend for Chat-Med App" \
      version="1.0.0"
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install recharts plotly.js react-plotly.js @mui/material @emotion/react @emotion/styled
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
