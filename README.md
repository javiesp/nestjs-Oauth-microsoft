# nestjs-Oauth-microsoft
Genera y valida un token utilizando Oauth con microsoft Graph API y autentica el token con decoradores
---

## Features
- Microsoft OAuth 2.0 Authentication
- Securely fetch user details from Microsoft Graph API
- Stateless authentication flow
- Redirect support for frontend integration

---

## Prerequisites

1. **Node.js**: Ensure Node.js is installed.
2. **Azure App Registration**: Set up an app in Azure Active Directory and note the following:
   - `CLIENT_ID`
   - `CLIENT_SECRET`
   - `REDIRECT_URI` (e.g., `http://localhost:3000/auth/microsoft/redirect`)
3. **Environment Variables**: Configure the following in a `.env` file:
   ```env
   MICROSOFT_CLIENT_ID=<your-client-id>
   MICROSOFT_CLIENT_SECRET=<your-client-secret>
   MICROSOFT_REDIRECT_URI=http://localhost:3000/auth/microsoft/redirect
   SESSION_SECRET=<your-session-secret>
   ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm run start
   ```
   By default, the application runs on `http://localhost:3000`.

---

## Endpoints

### 1. **Login**
#### `GET /auth/login`
- **Description**: Redirects to Microsoft login page to initiate the authentication flow.
- **Response**: Redirects to Microsoft login.

### 2. **Callback**
#### `GET /auth/microsoft/redirect`
- **Description**: Handles the callback from Microsoft after successful login.
- **Response**: Returns the authenticated user details.

### 2. **Callback**
#### `GET /auth/health`
- **Description**: Use the bearen token option to validate this method.
- **Response**: Returns a string.

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

### 3. **Fetch User Profile from Graph API**
#### `GET /auth/profile`
- **Description**: Fetches additional user details from Microsoft Graph API.
- **Headers**:
  - `Authorization: Bearer <access_token>`
- **Response**: Returns the user's Microsoft profile details.

- **Sample Response**:
  ```json
  {
    "id": "12345678-abcd-efgh-ijkl-9876543210",
    "displayName": "John Doe",
    "givenName": "John",
    "surname": "Doe",
    "mail": "john.doe@example.com",
    "jobTitle": "Software Engineer"
  }
  ```

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

---

## Error Handling

- **404 Not Found**:
  If the requested route does not exist.
  ```json
  {
    "message": "Cannot GET /<endpoint>",
    "error": "Not Found",
    "statusCode": 404
  }
  ```

- **401 Unauthorized**:
  If the user is not authenticated or access token is invalid.
  ```json
  {
    "message": "Unauthorized",
    "error": "Unauthorized",
    "statusCode": 401
  }
  ```

---

## Customization

1. **Frontend Integration**:
   Update the `callback` route to redirect to your frontend with a token:
   ```typescript
   @Get('microsoft/redirect')
   async microsoftRedirect(@Req() req, @Res() res): Promise<any> {
     const user = req.user;
     return res.redirect(`http://localhost:4200/dashboard?token=${user.accessToken}`);
   }
   ```

2. **Access Token Usage**:
   Use the `accessToken` to fetch more details from Microsoft Graph API:
   ```typescript
   const response = await axios.get('https://graph.microsoft.com/v1.0/me', {
     headers: { Authorization: `Bearer ${accessToken}` },
   });
   ```

---

## Future Enhancements
- Add database integration to persist user data.
- Implement token refresh flow for long-lived sessions.
- Enhance error handling and logging.

---

## License
This project is licensed under the MIT License.

