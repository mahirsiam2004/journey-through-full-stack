from fastapi import FastAPI
from pydantic import BaseModel, HttpUrl
app = FastAPI()

class Course(BaseModel):
    name:str
    instructor:str
    duration:float
    website:HttpUrl

@app.post("/post")
def create_post(post:Course):
    return("data": post);


# @ decorator
@app.get("/")
def innovatrix():
    return {"Django": "API"}

@app.get("/course")
def mahir():
    return {"course":"mahir backend course with fastapi"}