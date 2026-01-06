from fastapi import APIRouter, Query # Import the APIRouter class from fastapi
from fastapi.responses import FileResponse
from routes.photos import DB # Import the database manager instance from photos route
from utils.ex import ExportManager
#from storage.db import DatabaseManager


EX = ExportManager()

# export ROUTER

export_router = APIRouter(
    prefix="/export", # Set the prefix of the router
    tags=["Export"], # Set the tag of the router
    responses={404: {"description": "Not found"}}, # Set the 404 response
) # Initialize the router


@export_router.get('/zip') # Zip Export Route
async def export_zip(payload: list[str] = Query(..., description="Photo IDs")):
    photos = DB.getPhotosList(payload) # receive list of photos from DB using those ids

    output = EX.create_zip(photos) # create KML file using those photos

    zip = FileResponse(
        output,
        media_type="application/zip",
        filename= output.split("/")[-1]
    )

    return zip

@export_router.get('/kml') # KML Export Route
async def export_kml(payload): # receive parameters for export such as an array of ids

    photos = DB.getPhotosList(payload) # receive list of photos from DB using those ids

    output = EX.create_kmz(photos) # create KML file using those photos

    file = FileResponse(
        output,
        media_type="application/vnd.google-earth.kml+xml",
        filename= output.split("/")[-1]
    )

    
    data = {
        "Message": f"Successfully created KML file with {len(photos)} photo(s)",
        "Input": payload,
        "Output": output
    }

    return file


@export_router.get('/kmz') # KMZ Export Route
async def export_kmz(payload: list[str] = Query(..., description="Photo IDs")): # recieve parameters for export such as an array of ids

    photos = DB.getPhotosList(payload) # recieve list of photos from DB using those ids

    output = EX.create_kmz(photos) # create KMZ file using those photos

    file = FileResponse(
        output,
        media_type="application/vnd.google-earth.kmz",
        filename= output.split("/")[-1]
    )
    
    data = {
        "Message": f"Successfully created KMZ file with {len(photos)} photo(s)",
        "Input": payload,
        "Output": file
    }

    return file
