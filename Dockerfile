FROM openjdk:21-jdk-slim AS backend-build
WORKDIR /app/backend
COPY backend/pom.xml backend/pom.xml
COPY backend/src backend/src
RUN apt-get update && apt-get install -y maven && mvn clean package -DskipTests


FROM node:18 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

FROM openjdk:21-jdk-slim
WORKDIR /app

COPY --from=backend-build /app/backend/target/*.jar ./app.jar

COPY --from=frontend-build /app/frontend/build ./frontend

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
