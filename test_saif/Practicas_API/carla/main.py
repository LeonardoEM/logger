from fastapi import FastAPI, HTTPException 
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class Post(BaseModel):
    id:int
    title:str
    content:str

posts_db: List[Post]=[]

# Metodo de ejemplo para GET (Obtencion de los post)
@app.get("/posts",response_model=List[Post])
def get_posts():
    return posts_db 

# metodo de ejemplo para POST(enviar datos)
#constructor
@app.post("/posts",response_model=Post)
def crear_post(post: Post):
    posts_db.append(post)
    return post
