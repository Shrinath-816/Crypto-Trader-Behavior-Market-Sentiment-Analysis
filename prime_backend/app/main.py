from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from app.db.session import engine
from app.db.base import Base
from app.routers import auth, tasks
from app.dependencies import get_current_user

app = FastAPI(title="PrimeTrade Intern Assignment")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)


app.include_router(auth.router)
app.include_router(tasks.router)

@app.get("/")
def root():
    return {"status": "API running"}

@app.get("/api/v1/protected")
def protected_route(user=Depends(get_current_user)):
    return {
        "message": "Access granted",
        "user_email": user.email,
        "role": user.role
    }


