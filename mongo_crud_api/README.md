# Todo API v1

This is a simple TODO API that allows you to create, read, update, and delete TODOs.

## Endpoints

    - `/todos`: Create a Todo and Get all Todos
        - POST: This will create a new Todo
        - GET: this provides a paginated response of all TODOs. The following query parameters are supported:
            - `page`: the page number to return. defaults to 1.
            - `size`: the number of items to return. defaults to 10.

    - `/todos/{id}`: Read, update, and delete a TODO.
        - GET: returns the TODO with the given id.
        - PUT: updates the TODO with the given id.
        - DELETE: deletes the TODO with the given id

## Schema

The Todo Schema is as follows (note that the `_id` is a Mongo id):

### Request Schema

    ``` yaml
    {
        "title": "api test",
        "description": " done"
    }
    ```

### Response Schema

    ``` json
    {
        "title": "api test",
        "description": " done",
        "_id": "636f3de558ffd887415ed419",
        "timestamp": "2022-11-12T06:32:05.391Z"
    }
    ``` 

## Technologies Used

1. Node js (Express Framework)
2. MongoDB and Mongoose

## Usage

1. Install all dependencies using `npm install`
2. Create a .env file and fill in the MONGO_DB_URL
3. The dev server can be started using the following command `npm run dev`
4. The dev server will start on port 3000 or any port specified in the .env file
5. The server will automatically create a collection called `todos`