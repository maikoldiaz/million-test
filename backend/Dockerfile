# Etapa de construcción
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copiar todos los archivos .csproj y restaurar dependencias
COPY ["api/Api.csproj", "api/"]
COPY ["Application/Application.csproj", "Application/"]
COPY ["domain/Domain.csproj", "domain/"]
COPY ["infrastructure/Infrastructure.csproj", "infrastructure/"]
COPY ["test/Test.csproj", "Test/"]

# Restaurar dependencias
RUN dotnet restore "api/Api.csproj"

# Copiar todo el contenido del proyecto
COPY . .

# Establecer el directorio de trabajo para la compilación
WORKDIR /src/api

# Publicar el proyecto principal (API) en modo Release
RUN dotnet publish "Api.csproj" -c Release -o /app/publish

# Etapa de pruebas
FROM build AS test
WORKDIR /src/Test

# Ejecutar las pruebas unitarias
RUN dotnet test --no-restore --logger "trx;LogFileName=test-results.trx"

# Etapa de ejecución
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copiar los archivos publicados desde la etapa de construcción
COPY --from=build /app/publish .

# Configurar el punto de entrada
ENTRYPOINT ["dotnet", "Api.dll"]