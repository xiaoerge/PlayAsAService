# Play as a Service (PaaS)

## Play random games like `Dice`, `Rock Paper Scissors` on social media sites.

## The idea is to be able to paste a PaaS url into websites like Slack, Facebook and Twitter and generate random beautiful results each time.

### Known issues
- Formatting of PaaS on social media websites.
- Caching by social media.


### How to run
```
git clone https://github.com/xiaoerge/PlayAsAService.git

cd PlayAsAService

npm install

npm start
```


### How to contribute
1. Create a `Pug` view in `./views` and name if afer the game, eg `coinflip.pug`
2. Create a router in `./routes` and name if after the game, eg `coinflip.js`
3. Open `cointflip.js` and create a HTTP Get handler at path `/` that sends the necessary data to the view.
4. Open `coinflip.pug` and format it's content
5. Open `app.js` at project root. Import and use `coinflip` router.