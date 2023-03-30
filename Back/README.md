- Name of the Project : Second Life

Pour lancer le projet il faut faire :
# npm run migrate 
    Pour commencer la migration sur la base de donnée Mysql
# npm run server
    Pour lancer la complilation et demarrer le projet sur port choisi

    
- General concept : The main concept of our site is the sale of refurbished smartphones. We want to give a second life to smartphones to fight against electronic waste, and give the possibility to people who do not have enough means to be able to afford a good smartphone.

- Examples of products : Iphone, Samsung Galaxy S, Huweai, Alcatel, Sony, ZTE, Wiko, LG, Htc ... 

- API Operation:
To work we can make requests with POSTMAN.
The queries we have are:
* get: To display all the elements ask
ex: get /user/ to display all users.

* The get by ID: which allows to display an element thanks to its ID.
ex: get /user/1 to display the element with ID 1.

* The post that allows us to add elements to our database,
to do this we enter the parameters that we want to add directly to POSTMAN and these are directly added to the database.
    In the post for users we have two possibilities: The login to connect and the register to add a user.

* The pacth by ID: which allows to modify the information of an element thanks to its ID, to do so enter the parameters the information we want to change and the ID of the element.

* The delete by ID: as its name suggests is used to delete an element by its ID.
