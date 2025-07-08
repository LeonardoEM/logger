from fastapi import FastAPI, HTTPException
from pydantic import BaseModel 
from typing import List, Optional

app= FastAPI()
class Post(BaseModel):
    id:int
    title:str
    content:str

postDB: List[Post]=[]#postDB es un objeto de lista

#Metodo de ejemplo para GET(obrenemos los posts)
@app.get("/posts",response_model=List[Post])
def getPost():
    return postDB

#Medoto de ejemplo para Post
@app.post("/post", response_model=Post)#el response es el modelo que vamos a devolver
def crearPost(post:Post):
    postDB.append(post)
    return post