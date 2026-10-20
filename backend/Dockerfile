FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN java -version && javac -version

RUN chmod +x mvnw && ./mvnw clean package -DskipTests

CMD ["sh", "-c", "java -jar target/*.jar"]