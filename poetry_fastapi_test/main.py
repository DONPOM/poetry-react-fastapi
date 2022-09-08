import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS on localhost
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
@app.get("/") 
async def main_route():     
  return {"message": "Hello world"}

@app.get("/notifications") 
async def main_route():     
  return [
      {"id": 1, "name": "Sign in", "description":"There was a now sign in on your account"},
      {"id": 2, "name": "Website traffic", "description":"Web traffic was up by 26%"}
    ]

def start():
    uvicorn.run("poetry_fastapi_test.main:app", host="0.0.0.0", port=8080, reload=True)