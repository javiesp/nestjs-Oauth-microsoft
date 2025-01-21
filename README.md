# nestjs-Oauth-microsoft
Genera y valida un token utilizando Oauth con la API de Microsoft Graph y autentica el token con decoradores
---

## Características
- Autenticación Microsoft OAuth 2.0
- Obtención segura de los detalles del usuario desde la API de Microsoft Graph
- Flujo de autenticación sin estado
- Soporte para redirección en integración con el frontend

---

## Requisitos previos

1. **Node.js**: Asegúrate de tener instalado Node.js.
2. **Registro de aplicación en Azure**: Configura una aplicación en Azure Active Directory y toma nota de lo siguiente:
   - `CLIENT_ID`
   - `CLIENT_SECRET`
   - `REDIRECT_URI` (por ejemplo, `http://localhost:3000/auth/microsoft/redirect`)
3. **Variables de entorno**: Configura lo siguiente en un archivo `.env`:
   ```env
   MICROSOFT_CLIENT_ID=<tu-client-id>
   MICROSOFT_CLIENT_SECRET=<tu-client-secret>
   MICROSOFT_REDIRECT_URI=http://localhost:3000/auth/microsoft/redirect
   SESSION_SECRET=<tu-session-secret>
   ```

---

## Instalación

1. Clonar repositorio:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar aplicación:
   ```bash
   npm run start
   ```
   By default, the application runs on `http://localhost:3000`.

---

## Endpoints

### 1. **Login**
#### `GET /auth/login`
- **Description**: Redirije a login de microsoft para comenzar el flujo.
- **Response**: Redirección.

### 2. **Callback**
#### `GET /auth/microsoft/redirect`
- **Description**: Maneja el callback desde microsoft y genera un token de acceso.
- **Response**: Retorna la respuesta autenticada.

- **Sample Response**:
  ```json
  {
    "message": "Login successful",
    "user": {
      "displayName": "John Doe",
      "givenName": "John",
      "surname": "Doe",
      "mail": "john.doe@example.com",
      "id": "12345678-abcd-efgh-ijkl-9876543210",
      "accessToken": "eyJ0eXAiOi..."
    }
  }
  ```
### 3. **Callback**
#### `GET /auth/health`
- **Description**: Utilizar un bearer token para autenticar el login.
- **Response**: Retorna un string.

---

## Project Structure
```
project-folder/
├── src/
│   ├── app.module.ts        # Root module
│   ├── auth/
│   │   ├── auth.controller.ts # Handles login and callback routes
│   │   ├── auth.service.ts    # Business logic for authentication
│   │   ├── microsoft.strategy.ts # Microsoft OAuth 2.0 strategy
├── main.ts                  # Application entry point
├── .env                     # Environment variables
├── README.md                # Project documentation
```
