from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import uvicorn

from routes.photos import photo_router
from routes.export import export_router

print("Environment variables loaded.\n")

app = FastAPI(title="Photo Log Map API V2", version="2.0.0", openapi_url="/openapi.json", docs_url="/docs", redoc_url="/redoc", swagger_ui_favicon_url="/assets/favicon.ico") # Initialize the Flask application
app.include_router(photo_router) # Include the routers in the app
app.include_router(export_router) 
# and enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/') # Index Route
def root():

    data = {
        "Message": "Connected to Photo Log Map API",
        "Framework": "FastAPI"
    }

    return data


# Start the server when the script is run directly
if __name__ == '__main__':
    uvicorn.run()
    