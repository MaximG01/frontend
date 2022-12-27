InfoWarzone
Project Summary
A website that has two sections. In the first section the user can click on different weapons to get information about them ranging from description to fun facts. In the second section, the user enters their name and  can create a loadout of weapons by choosing one primary, one secondary and one melee weapon. The user can then delete their loadout or modify it.


Project Summary	1
User Stories	1
ER Diagram	1
User Endpoints	2


Project Description
The project was made with spring-boot for the backend as well as React.js for the frontend. I also used the libraries react router as well as Awesome tables which are like a slide presentation. https://github.com/rcaferati/react-awesome-slider. 
User Stories
As a user, I want to click on different buttons in order to have access to information about them.
As a user, I want to click on the arrows situated on the sides of the page to be able to navigate through the slider so that I can read different information about weather weapons such as the description, year made, bullet type, rate of fire, country of origin, creator, class and three different facts.
As a user I want to click on “Loadout” so that I can be brought to a new page.
As a user I want to fill out a form and so that I can see my full name be displayed on the screen.
As a user I want to select a weapon so that I can build Loadout.
As a user I want to click on the “Edit Loadout” button so that I can edit my loadout(s).
As a user I want to click on the “Delete Loadout” button so that I can delete my loadout(s).


ER Diagram

User Endpoints
@GetMapping("/descriptions/{Id}")
@GetMapping("/User")
@PostMapping("/User")
@GetMapping("/Loadout")
@PostMapping("/Loadout")
@PutMapping("/Loadout/{loadoutId}")
@DeleteMapping("/Loadout/{id}")


Challenges
I have not been able to figure out the Put request. It has been a challenge and I intend to fix it in the future, I also plan on adding more guns, and other features such as drag and drop.

