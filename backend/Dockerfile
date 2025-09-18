FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/*.jar app.jar
LABEL maintainer="github.com/EvgenijaSotiroska" \
      description="Backend service for Chat-Med App" \
      version="1.0.0"
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
