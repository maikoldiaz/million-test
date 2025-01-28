# 🏡 Real Estate Application

Este proyecto es una **aplicación de visualizacio** de propiedades inmobiliarias, incluyendo un **backend en .NET 8** y un **frontend en Next.js con TypeScript**.
La aplicación sigue principios de Domain-Driven Design (DDD) y SOLID, y está construida con .NET 8. Además, cuenta con pruebas unitarias en NUnit para garantizar su estabilidad.

---
## 🛠️ **Requisitos Previos**

Antes de ejecutar el proyecto, asegúrate de tener instalado:

1. **Docker** y **Docker Compose**

   - Descárgalo desde 👉 [https://www.docker.com/get-started](https://www.docker.com/get-started)

2. **.NET 8 SDK** (Opcional si deseas ejecutarlo sin Docker)

   - Descárgalo desde 👉 [https://dotnet.microsoft.com/en-us/download](https://dotnet.microsoft.com/en-us/download)

---

## 💡 **Notas**

- La API está configurada para ejecutarse en **Docker** y validará las pruebas unitarias antes de generar la imagen final.
- Si alguna prueba falla, la construcción se detendrá, asegurando estabilidad en la aplicación.
- Puedes personalizar los puertos en `docker-compose.yml`.
- La prueba incluye una inicialización de datos dummy, que se crean al momento de iniciar la base de datos desde docker compose.

---
## 🏗️ **Tecnologías Utilizadas**
### 🔹 Backend (API)
- **.NET 8**
- **ASP.NET Core**
- **Entity Framework Core**
- **NUnit** (pruebas unitarias)
- **Docker y Docker Compose**

### 🔹 Frontend
- **React con Next.js 15**
- **TypeScript**

---

# 📂 **Estructura del Proyecto**

```
📦 million-test
 ┣ 📂 backend/               # API en .NET 8
 ┃ ┣ 📂 api/                 # API principal
 ┃ ┣ 📂 Application/         # Capa de aplicación y servicios
 ┃ ┣ 📂 Domain/              # Entidades y lógica de dominio
 ┃ ┣ 📂 Infrastructure/      # Persistencia y acceso a datos
 ┃ ┣ 📂 Test/                # Pruebas unitarias con NUnit
 ┃ ┣ 📜 docker-compose.yml   # Configuración de contenedores
 ┃ ┣ 📜 Dockerfile           # Configuración de imagen Docker
 ┃ ┗ 📜 README.md            # Este documento
 ┣ 📂 frontend/              # Aplicación web con Next.js
 ┃ ┣ 📂 app/                 # Estructura de App Router
 ┃ ┣ 📂 components/          # Componentes reutilizables (Cards, Listas, Filtros)
 ┃ ┣ 📂 context/             # Context API (filtros de búsqueda)
 ┃ ┣ 📂 pages/               # Páginas de Next.js
 ┃ ┣ 📂 services/            # Llamadas a la API
 ┃ ┣ 📂 styles/              # Archivos CSS (globales y módulos)
 ┃ ┣ 📂 types/               # Definición de tipos en TypeScript
 ┃ ┗ 📜 package.json         # Dependencias del frontend
 ┃ 📜 docker-compose.yml     # Orquestar y ejecutar múltiples contenedores
 ┣ 📂 seed-data/             # Datos dummy
 ┃ ┗ 📜 init.js              # Agrega los datos semilla a la base de datos.
```

---

# 🚀 **Cómo Ejecutar el Proyecto**

## 🔹 **Ejecutar el Backend**
### 1️⃣ **Con Docker (Recomendado)**
Ejecuta el siguiente comando en la raíz del proyecto:

```bash
docker-compose up --build
```

Esto levantará la API y el Front en:

```
http://localhost:5000
```

```
http://localhost:3000
```

### 2️⃣ **Ejecutar el Backend Manualmente**
Si prefieres ejecutarlo sin Docker:

```bash
cd backend
dotnet restore
dotnet build
dotnet run --project api/Api.csproj
```

## 🔹 **Ejecutar el Frontend**
### 1️⃣ **Instalar dependencias**
```bash
cd frontend
npm install
```

### 2️⃣ **Ejecutar la aplicación**
```bash
npm run dev
```

Accede en el navegador:

```
http://localhost:3000
```

---

# 📺 **Características del Frontend**

## 🔹 **Página Principal (`/`)**
- Muestra una lista de propiedades.
- Cada propiedad se visualiza en una **tarjeta (`PropertyCard`)** con su información básica.
- Se puede hacer clic en una tarjeta para ver **detalles de la propiedad**.

## 🔹 **Filtros y Búsqueda**
- Implementado con **React Context API** (`FilterContext`).
- Permite buscar por nombre y filtrar por precio.

## 🔹 **Detalles de Propiedad (`/property/[id]`)**
- Página dinámica que muestra los detalles completos de una propiedad.
- Muestra todas las imágenes asociadas a la propiedad.

---

# 🛠️ **Configuraciones**
## 🔹 **Configuración de la API en el Frontend**
El frontend obtiene los datos desde la API. La URL base se define en una **variable de entorno** o de manera hardcoded en `propertyService.ts`:

```typescript
const BASE_URL = process.env.API_URL || 'http://localhost:5000/api';

class PropertyService {
  async fetchProperties(): Promise<Property[]> {
    const response = await fetch(`${BASE_URL}/properties`);
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    return response.json();
  }
}

export default new PropertyService();
```

Si necesitas cambiar la URL de la API, configura `.env.local`:

```
API_URL=http://localhost:5000/api
```

---

# ✅ **Pruebas Unitarias**
### 🔹 **Backend**
Para ejecutar las pruebas en .NET:

```bash
dotnet test
```

### 🔹 **Frontend**
Para ejecutar pruebas en React con Jest:

```bash
cd frontend
npm run test
```

---
