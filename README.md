# PruebaTata

to use this API first we need to install all the dependencies with the next line:
  npm install
  
once all the dependencies are installed we can run our server, we are using the 3001 port so make sure that port is available
to run the server we need to use the next line:

  npm run dev
  
the url to use the API is
  http://localhost:3001/api/v1/
  
  for the assignment #2 the urls that we are going to use is
  GET http://localhost:3001/api/v1/weather/:anyLocation
    
  for the assignment #3 the urls that we are going to use is
  POST  http://localhost:3001/api/v1/event/
    body { "input" : "500 1000"}
  
  for the assignment #4 the urls that we are going to use is
    get all the users
    GET http://localhost:3001/api/v1/user/view
    
    get a specific user 
    GET http://localhost:3001/api/v1/user/view/:id
    
    add a new user
    POST http://localhost:3001/api/v1/user/add
      body {
        "name" : "Miguel",
        "age" : "26",
        "gender" : "Male",
        "email" : "miguel.lopez@example.com"
      }
      
    update a user
    PATCH http://localhost:3001/api/v1/user/edit/:id
      body {
        "name" : "New Name",
        "email" : "new.email@example.com"
      }
  
