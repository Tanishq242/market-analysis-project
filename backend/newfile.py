import shutil, hashlib, os
from analysis import *
from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware


print("TEST.PY LOADED")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

upload_file_name = None

class FilterData(BaseModel):
    instruments: Optional[str] = None
    strikes: Optional[int] = None
    expiry: Optional[str] = None
    symbol: Optional[str] = None

@app.get("/")
def read_root():
    return {"message": "It is a FastAPI base URL"}

@app.get("/metadata")
def get_metadata():
    return file_metadata(file_read(upload_file_name))

@app.post("/filter")
def get_filter(data: FilterData):
    print("Request received")

    df = file_read(upload_file_name)
    print("File loaded")

    result = filter_data(df, data)
    print("Filtering complete")

    return result.to_dict(orient="records")

@app.post("/upload")
def upload_file(file: UploadFile = File(...)):
    global upload_file_name

    ext = os.path.splitext(file.filename)[1]

    hashname = hashlib.sha256(file.filename.encode()).hexdigest()

    new_filename = f"{hashname}{ext}"

    with open(f"uploads/{new_filename}", "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    upload_file_name = new_filename

    return row_count(file_read(upload_file_name))

@app.get("/table")
def get_table_data():
    df = file_read(upload_file_name)
    return df.head(100).to_dict(orient="records")