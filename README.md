# Play as a Service (PaaS)
#### Not to be confused with Platform as a Service.

## Play random games like `Dice`, `Rock Paper Scissors` on social media sites.

### Slack Integration
![Slack Integration](https://raw.githubusercontent.com/xiaoerge/PlayAsAService/master/screenshot/paas_slack_command_guide.png)
When Slack makes this request, it'll send a post body parameter `text`.
PaaS expects `text` to be the value of the desired game. 
PaaS currently has `dice`, `rockpaperscissor` and `carddraw`. 
More games will be added in the future 
and when they do, they'll automatically be available towards slack command. 
For the time being,  have fun with /paas diceroll | rockpaperscissor | carddraw

# End User Stuff
## How to play

Paste the url `https://paas.idpie.com/diceroll` into Slack. PaaS generates a random dice value. 
This acts as a turn you played. The recipient can past the same url `https://paas.idpie.com/diceroll` back into Slack
and have PaaS generate another dice value. This ends a round of dice roll. 

### Known issues
- Unfortunately we can't cover every social media site in existence. 
We try our best to keep a PaaS game beautiful on Facebook, Twitter, and Slack.
- Caching of older version of PaaS game by social media sites. 
We recommend append an arbitrary query string on the url so it may be treated as a new request. 
An example of the Dice roll game url with query string would be `https://paas.idpie.com/diceroll?abc=123`

### We have two games available at this moment, `Dice Roll` & `Rock Paper Scissors`.


# Developer Stuff 

## How does PaaS render a game on social media

Google 

1. Facebook Open Graph Protocol 
2. Twitter Card Developer Spec.
3. Slack unfurling

## How to run
```
git clone https://github.com/xiaoerge/PlayAsAService.git

cd PlayAsAService

npm install

npm start
```

~~## How to contribute a new game~~
~~1. Create a `Pug` view in `./views` and name it after the game, eg `coin-flip.pug`~~
~~2. Create a router in `./routes` and name it after the game, eg `coin-flip.js`~~
~~3. Open `coin-flip.js` and create a HTTP Get handler at path `/` that sends the necessary data to the view.~~
~~4. Open `coin-flip.pug` and format it's content~~
~~5. Open `app.js` at project root. Import and use `coin-flip` router.~~

## Image size constraints

### Facebook
* Less than 8MB
* At least 200px by 200px.

### Twitter
* Web: maximum height of 375px, maximum width of 435px