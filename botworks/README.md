
# BOTWORKS App

This project is a multi-user Retrieval-Augmented Generation (RAG) app built with a modern full-stack architecture:

---

## Frontend

 • Expo (React Native + TypeScript) for mobile and web UI
 • Responsive screens, navigation, and user interactions

## Backend

 • MCP Server (C#) hosted on Azure Container Apps
 • Handles user sessions, API orchestration, and RAG query processing

## RAG / Vector Storage

 • Pinecone, Cosmos DB, or PostgreSQL stores embeddings for fast retrieval

## AI / LLM

 • Azure OpenAI Service powers semantic search and generation

---

## Architecture Overview

 1. User input from the Expo app is sent via HTTPS to the MCP backend.
 2. MCP Server fetches relevant context from vector storage.
 3. Context + query is sent to Azure OpenAI for generation.
 4. MCP Server returns the response to the Expo frontend.

Here’s a version of your README.md with an ASCII architecture diagram included in Markdown format:

# Portfolio RAG App

This project is a **multi-user Retrieval-Augmented Generation (RAG) app** built with a modern full-stack architecture.

---

## Frontend

- **Expo (React Native + TypeScript)** for mobile and web UI
- Responsive screens, navigation, and user interactions

## Backend

- **MCP Server (C#)** hosted on **Azure Container Apps**
- Handles user sessions, API orchestration, and RAG query processing

## RAG / Vector Storage

- **Pinecone**, **Cosmos DB**, or **PostgreSQL** stores embeddings for fast retrieval

## AI / LLM

- **Azure OpenAI Service** powers semantic search and generation

---

## Architecture Overview

        ┌───────────────────────────┐
        │       Expo App (TS)       │
        │  - React Native screens   │
        │  - Navigation & UI       │
        └────────────┬────────────┘
                     │ HTTPS / REST API
                     ▼
        ┌───────────────────────────┐
        │    MCP Server (C#)        │
        │  - Azure Container Apps   │
        │  - User session handling  │
        │  - RAG orchestration      │
        │  - Custom API calls       │
        └───────┬─────────┬────────┘
                │         │
   ┌────────────┘         └────────────┐
   │                                  │
   ▼                                  ▼

┌───────────────┐                  ┌───────────────┐
│  Vector DB /  │                  │ Azure OpenAI  │
│  RAG Storage  │                  │   Service     │
│  - Pinecone   │                  │ - LLM / GPT  │
│  - Cosmos DB  │                  │ - Embeddings │
│  - PostgreSQL │                  └───────────────┘
└───────────────┘

---

## Key Features

- Multi-user support with session handling
- Secure Azure hosting with Container Apps
- Modular design allowing different vector databases or AI models
- Easy to extend for startup-ready features

# Todo Agents API

A RESTful API for managing Todo lists and items, defined using OpenAPI 3.0.

## API Overview

- **Base URL**: (Set this to your deployed MCP server endpoint)
- **Version**: 3.0.0
- **Contact**: azdevteam@microsoft.com

## Schemas

### TodoList
- **id**: string
- **name**: string (required)
- **description**: string

### TodoItem
- **id**: string
- **listId**: string (required)
- **name**: string (required)
- **description**: string (required)
- **state**: `todo` | `inprogress` | `done`
- **dueDate**: string (date-time)
- **completedDate**: string (date-time)

## Endpoints

### Lists

| Method | Path         | Description                   |
|--------|--------------|-------------------------------|
| GET    | `/lists`     | Get all Todo lists            |
| POST   | `/lists`     | Create a new Todo list        |
| GET    | `/lists/{listId}` | Get a Todo list by ID       |
| PUT    | `/lists/{listId}` | Update a Todo list by ID    |
| DELETE | `/lists/{listId}` | Delete a Todo list by ID    |

### Items

| Method | Path                         | Description                       |
|--------|------------------------------|-----------------------------------|
| GET    | `/lists/{listId}/items`      | Get all items in a Todo list      |
| POST   | `/lists/{listId}/items`      | Create a new item in a list       |
| GET    | `/lists/{listId}/items/{itemId}` | Get item by ID                  |
| PUT    | `/lists/{listId}/items/{itemId}` | Update item by ID                |
| DELETE | `/lists/{listId}/items/{itemId}` | Delete item by ID                |
| GET    | `/lists/{listId}/items/state/{state}` | Get items by state           |
| PUT    | `/lists/{listId}/items/state/{state}` | Update multiple items' state  |

## Parameters

- **listId**: Path parameter, unique identifier for a Todo list
- **itemId**: Path parameter, unique identifier for a Todo item
- **state**: Path parameter, Todo item state (`todo`, `inprogress`, `done`)
- **top**: Query parameter, number of items to return (default: 20)
- **skip**: Query parameter, number of items to skip (default: 0)

## Responses

- `200` — Success
- `201` — Created
- `204` — No content (successful delete or update without body)
- `400` — Bad request
- `404` — Not found

## Usage Example (JavaScript/TypeScript)

```ts
import axios from 'axios';
import { MCP_ENDPOINT } from '@env';

const getTodoLists = async () => {
  const response = await axios.get(`${MCP_ENDPOINT}/lists`);
  return response.data;
};



# Open AI Example

Use [Expo API Routes](https://docs.expo.dev/router/reference/api-routes/) to securely interact with the [OpenAI API](https://platform.openai.com/docs/introduction).

## Launch your own

[![Launch with Expo](https://github.com/expo/examples/blob/master/.gh-assets/launch.svg?raw=true)](https://launch.expo.dev/?github=https://github.com/expo/examples/tree/master/with-openai)

## Structure

- `app/api/generate+api.ts`: [Expo API Route](https://docs.expo.dev/router/reference/api-routes/) that interacts with the [OpenAI API](https://platform.openai.com/docs/introduction).
- `app/index.tsx`: Screen that uses the API Route to prompt the user and display results.
- `.env`: The environment variable file with references to your secret [OpenAI API key](https://platform.openai.com/api-keys).

## 🚀 How to use

```sh
npx create-expo-app -e with-openai
```

Replace `OPENAI_API_KEY=YOUR_KEY` in `.env` with your [OpenAI API key](https://platform.openai.com/api-keys).

Replace `origin` in the `app.json` with the URL to your [production API Routes](https://docs.expo.dev/router/reference/api-routes/#deployment) domain. This enables relative fetch requests.

```json
{
  "expo": {
    "plugins": [
      [
        "expo-router",
        {
          "origin": "https://my-expo-website.com"
        }
      ]
    ]
  }
}
```

Ensure you upload your environment variables to wherever you host the web app and API Routes.

## Deploy

Deploy on all platforms with Expo Application Services (EAS).

- Deploy the website: `npx eas-cli deploy` — [Learn more](https://docs.expo.dev/eas/hosting/get-started/)
- Deploy on iOS and Android using: `npx eas-cli build` — [Learn more](https://expo.dev/eas)

## 📝 Notes

- [Expo Router: API Routes](https://docs.expo.dev/router/reference/api-routes/)
- [Expo Router: Server Deployment](https://docs.expo.dev/router/reference/api-routes/#deployment)
- [Expo Router Docs](https://docs.expo.dev/router/introduction/)
- [Open AI Docs](https://platform.openai.com/docs/introduction)
