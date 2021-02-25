* Workflow Diagram:


* Library and framework: 
  - main_service: Postgresql(DB), Typescript, Express, jest (unit test)
  - tracking_service: Mongodb(DB), Typescript, Express.

* Requirement steps:
 - main_service directory:
  + Run "docker-compose up -d" and then is "docker-compose start" to install postgres docker container in your local machine.
  + After postgresql container ready, run "yarn" command to install all of necessary packages.
  + Run "yarn db:migrate" command to do a migration database.
  + Run "yarn seed:run" to insert fake data into database.
  + Finally, To get the app start, run "yarn start" command.  

 - tracking_service directory:
  + Run "docker-compose up -d" and then is "docker-compose start" to install mongodb docker container in your local machine.
  + After mongodb container ready, run "yarn" command to install all of necessary packages.
  + Finally, To get the app start, run "yarn start" command.

* APIS: Should import "VDC.postman_collection" into postman or another tools to see api document.
