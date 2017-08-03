## Assigment ##

Congratulations, you are now the owner of a **robot sports team**. Each owner is responsible for creating a roster
of player bots for league play. The league requires that your **roster be filled out with 10 starters and 5
substitutes**. You must submit your roster before you can begin league play.

Each player bot needs a **name**, and has two attribute scores associated with each:
- **Speed**
- **Strength**

The total **sum of the speed and strength** attributes is calculated as the "total attribute **score**" for each player bot.
The league has mandated that the total attribute score of each of your player bots can not exceed 100 points,
and no two players can have the same score, otherwise your team is disqualified from league play.

Please **generate an algorithm that can name your player bots and generates each attribute accordingly, and
meets the specifications of the league**.

- Each player bot created must have a **unique name**.
- Each player bot must have an alphanumeric sequence that looks like the following: "ABC1234" (as an
example).
- No two player bots can have the same name.
- **No two player bots can have the same total attribute score** (speed + strength = total attribute score).

You may use any sorting algorithm to define your 10 starter bots and 5 substitue bots.

<br/>

## Good Practices ##

### Storybook ###
>UI development environment for your React components.
React Storybook runs outside of your app, so you can develop UI components in isolation without worrying about app specific dependencies and requirements. 

It makes developing process easier, encourages you to write stateless components and it is a great tool to use for documentation. Super handy when working as a team.

**--> Check this app storybook at https://aschenkel.github.io/Roster-Bots/**
*(To see a component info, usage and propTypes click on the "Show Info" button on the top right corner)*

### Separate business logic from UI ###
Following the simple responsibility principle, things should change for only one thing. Extracting logic from UI makes the code more understandable and robust, facilitating unit testing

### Keep Components small ###
Making them easier to test, understand and reuse

### Adapts to changes ###
Things change over time. Having a set of rules defined in a settings file makes it super easy to adapt to changes like allowing more players per team or decreasing max score allowed

### Responsive ###
Works in desktop, tablet and phone



