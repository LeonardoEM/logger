from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class Post(BaseModel):
    id: int
    title: str
    content: str

posts_db: List[Post] = []

#Metodo de ejemplo para GET (obtencion de los post) 

@app.get("/posts", response_model=List[Post])
def get_posts():
    return posts_db

#Metodo ejemplo para POST 

@app.post("/posts", response_model=Post)
def create_post(post: Post):
    posts_db.append(post)
    return post
