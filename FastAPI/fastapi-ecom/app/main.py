from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def root():
    return {"message" : " Welcome to FastAPI"}


@app.get('/products/{id}')
def get_products(id:int):
    products = ["laptop", "mouse","Monitor"]
    return products[id];