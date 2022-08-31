# **About App**

As truthly travel-lovers, we (4 developers) decided to create an App, which will offer travellers everything in one place. 

This is a **RESTful** Single Page Web application, a graduation project, which was created in 6 Sprints (we used to work in SCRUM; 
our Sprints were lasting for 1 week). 

# **What do we offer?**

Accio Vacaccio offers services as:

 - representing informations about chosen city in real time (**API** were chosen as a solution);

 - forum, which gives ability to as for some help or find info about another user's experience;

 - adding to followings and having chat with app users;

 - storing photos in cloud (**AWS S3 bucket**);

 - storing some useful for travellers datas (**AWS RDS**).

 
Nice to see you interested in **Accio Vacaccio**.
<img width="1435" alt="Screenshot 2022-08-31 at 11 42 11" src="https://user-images.githubusercontent.com/89380230/187657226-d9557929-ccbb-45d1-b797-362f64367385.png">
**Welcome to your best trip experience!**

# **Technical characteristics**

  ## **Backend**

   The application is based on **Java** language on **Spring** framework in **Spring Boot** tool.

   As RDBMS was chosen **AWS RDS** with **PostgreSQL** engine.

   Storing all photos in cloud (implemented using **AWS S3**).

   As ORM solution was chosen **Hibernate** library.
   
   Implemented user authentication and authorization using **Spring security** module and **JWT token**.
   
   As an alternative for user, implemented integration with **Google Sign-in API**.
    
  ## **Frontend**

   As a frontend solution was chosen **React** library based on **JavaScript** language.

   As a CSS framework was chosen **React Bootstrap** solution.
    
  ## **Summary**
  
  <table>
    <thead>
      <tr>
       <td>       <b>Technologies Backend</b>         </td>
       <td>      <b>Technologies Frontend</b>      </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> Java + Spring Boot                 </td>
        <td>    JavaScript (ES6)             </td>
      </tr>
      <tr>
        <td> Spring Security (JWT token)        </td>
        <td>    React.js                     </td>
      </tr>
     <tr>
        <td> AWS S3 bucket (for images storing) </td>
        <td>    React Bootstrap              </td>
      </tr>
     <tr>
        <td> PostreSQL (as engine for AWS RDS)  </td>
        <td>                                 </td>
      </tr>
      <tr>
        <td> Hibernate (ORM)                    </td>
        <td>                                 </td>
      </tr>
     <tr>
        <td> Google sign in and map (API)       </td>
        <td>                                 </td>
      </tr>
    </tbody>

  </table>
  
# **How to run App**

1. In case appeared message about enable **Lombok** (in IDE), please, do it.
2. Open the terminal (cmd) window in src/main/frontend root.
![cd](https://user-images.githubusercontent.com/89380230/187660140-6d7bacc7-2459-4709-9d6f-646f14700775.png)

3. Provide: 
 - ```npm i react```;
 
 ![react](https://user-images.githubusercontent.com/89380230/187660266-7bc715d4-8d1a-437b-86fb-d142ef3bdca9.png)

 - ``` npm start```.
 
![start](https://user-images.githubusercontent.com/89380230/187660284-6f150be7-ac4c-487b-8968-27b6c46bb72a.png)


# **In case something went wrong, see here ...**

In any case, please, mail as to *shcherbak.tet@gmail.com* about problem appeared.

1. You tried to run an App and appeared Error "Cannot configure hibernate EntityManager configuration" =>

   We can fix it! The cause it appeared is AWS accout expired and we should restore it.
2. You chose a city and some info didn't render and in console appeared message with "HTTP code 429" => 

   It means, that given amount of requests already used.
   There a two possible couses: 
    - Expired amount of requests per day for some API;
    - Expired amount of requests at all for some API and we will be needed to change an account.

# **Guideline**

There are two ways of doing things in the app:
- ``` When the user is logged in```;
- ``` When the user is not logged in```.

**NOT LOGGED IN** user has limited access to the application's functionality. 

Such a user can **ONLY READ** the forum 
 ![forum](https://user-images.githubusercontent.com/89380230/187661042-24d1b7cd-0f62-4cae-ba4a-57aea9d876d1.jpg)
and can use the main functionality of the application - search for information about the city.

![italy](https://user-images.githubusercontent.com/89380230/187661173-7c36b0f8-dcf0-4b27-b9c6-925de148d910.jpg)

 ![living](https://user-images.githubusercontent.com/89380230/187661325-eb8dc85e-42ee-4ff3-baec-ae118b4bea38.jpg)

**LOGGED IN** user has full access to the functionality of the application.

1. For such a user, all of the standard functions on the forum are open (add/delete/edit/like/sort, etc.).

![forum](https://user-images.githubusercontent.com/89380230/187662268-831a7af8-fc40-44b7-a523-cd20d2c9557e.png)

Also, after pledging, you can go to your personal cabinet, where you have a full set of features you need for the traveler:

2. Friends in the app (the app has a live chat where you can correspond with your friends)

  - Notebook

  - Places I want to go

  - Travel albums

  - Favourite forum comments

  - Money converter
 
 
![profile](https://user-images.githubusercontent.com/89380230/187662270-5194358b-b7af-4b79-85fc-66949885cf8d.png)

# Used **API**s:

- https://weatherapi-com.p.rapidapi.com/current.json; // weather (1 000 000 requests / month)
- https://newscatcher.p.rapidapi.com/v1/search_free; // last news (21 requests / hour)
- https://cost-of-living-and-prices.p.rapidapi.com/prices; // living costs (1 000 requests / day)
- https://world-airports-directory.p.rapidapi.com/v1/airports/; // airports info (unlimited)
- https://airport-info.p.rapidapi.com/airport; // second airports info (unlimited)
- https://api.travelpayouts.com/data/en/cities.json; // third airports info (unlimited)
- https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation; // booking (10 requests / day)
- https://ranked-crime-cities.p.rapidapi.com/Kc4Qth/ranked_crime_cities; // crime rating (unlimited)
- https://trueway-places.p.rapidapi.com/FindPlacesNearby; // atractive places (500 requests / month)
- https://bing-image-search1.p.rapidapi.com/images/search; // images from Bing  (1 000 requests / month)
- https://google-maps-autocomplete-plus.p.rapidapi.com/autocomplete; // google coordinates API (1 000 000 requests / month)
- https://emergencynumberapi.com/api/country/; // emergency numbers (unlimited)
- https://v6.exchangerate-api.com/v6/; // exchange currency (unlimited)
- https://recaptchaenterprise.googleapis.com/$discovery/rest?version=v1; // Google reCAPTCHA (unlimited)

# **Developers team**

* [Tetiana Shcherbak](https://github.com/TetianaShcherbak)
* [Jakub Gembicki](https://github.com/JakubGem)
* [Sebastian Ryndak](https://github.com/SebastianRyndak)
* [Vladyslav Shyian](https://github.com/mrshyian)
