# unbroken.io — website code

This is a [Gatsby](https://www.gatsbyjs.org) (static site with React) project, based off of [gatsby-starter-default-i18n](https://github.com/angeloocana/gatsby-plugin-i18n/tree/master/packages/gatsby-starter-default-i18n). [Bulma](https://bulma.io) is the flexbox-based CSS framework used.


### Get going

`yarn` — Fetch dependencies.

`yarn start` — Start development server (with hot-reloading, by default at [localhost:8000](http://localhost:8000)).

`yarn build` — Static build optimized for production (static HTML and per-route JavaScript code bundles).

`yarn serve-build` — Serves the build locally.

`yarn format` — Clean up (prettify) the code.


## Troubleshooting

* When `yarn start` errors out with `This dependency was not found`, you should probably sync dependencies by simply running `yarn`.


### TADAs

* "Using the global `graphql` tag" deprecation warning when starting development server.

* No flag button language selection (may always route to `/` if that makes it easier).

* Logo is blurry. An SVG logo is provided in the designs.

* Animation have been removed, `animate.css` still included to roll yr own

* Font bold on main buttons

* FAQ "links" open collapsed text

* Links in the footer have underline in active/hover state.

* The private beta label added.

* Mobile - The 3 column with "Already exchanged 3.4 mln" centers all elements as soon as it puts the 3 underneath each other.

* Mobile - Spacing between the "Secure" titled textblock and the "Sign up" button is fixed.

* Mobile - Spacing in the footer is now correct at small breakpoints.

* Mobile - Menu logo is no longer blurry.


### TODOs / FIXMEs

I know it's not the final delivery, but I still wanted to make sure to provide as much feedback as possible as this point.

* "unmet peer dependency" warnings when fetching deps. More info here (2nd answer seems very insightful) https://stackoverflow.com/questions/35738346/how-do-i-fix-the-npm-unmet-peer-dependency-warning

  * not sure how harmful this is...
  * they could be installed manually (as mentioned in the second answer) or added explicitly to the packages.json

* All `pt` refs may be changed to `nl` refs. And some translations for routes: `learn-more` -> `meer-leren`, `getting-started` -> `gelijk-beginnen`.

  * WONTFIX1

* 404 is not styled. For styling it, please be creative (may use one of the illustration images, or whatever).

* Getting started not linked from button.

  * Only the link text is clickable, this is not workable for a button: the whole button needs to be clickable.

* Logo in the footer of the page is *still* blurry. An SVG logo is provided in the designs.

* Hover/active state incorrect on main buttons (off from `00 - Style/00-StyleGuide.jpg` and design).

  * Please make the organge button hovel like the orange button in the middle column of the StyleGuide, the active state (get there with TAB) should be like the right column in the StyleGuide.

* Getting started:

  * terms of service links do not have proper hover/active states (I expect the icon AND text to be both clickable and change together on hover, button should get darker like the orange buttons in the StyleGuide)
  * FAQ links should (both text AND icon) have hover states like the terms of service links. Collapsing/uncollapsing may use a little animation.
  * Why is the first FAQ button smaller? (on Firefox)

* Links in the footer have active/hover state that pushes down the underlying items (on Firefox).

* Missing: the login page. (Called sign in page in the briefing)

  * In the screenshot you see me mentioning the "sign-in screen" (the first of `02 - Applicatie`) explicitly. That totals to 4 in total. Please highlight were I mention "only 3 pages", because I dont remember saying that.

* Missing: the login page with a message "Unknown combination of email address and password. Please try again." (SMALL CHANGE REQUEST i guess)

* The private beta label:

  * Not showing for some middle breakpoints
  * Needs a bit more padding at top and bottom on mobile.

* Mobile - The header (Ethereum made simple + man in chair) of the home page (`/`) looks not so good at some breakpoints.

  * WONTFIX2

* Mobile - The "Currency for the digital ers + girl with mobile" part looks bad at "middle width" breakpoints; also the button stays too much to the right on the smallest breakpoints.

  * WONTFIX3

* Mobile - SMALL CHANGE REQUEST In the 3-column starting with "01- [...] Sign up" it would be nice if the the default and active/hoover states is switched compared to the desktop variant. So that on small breakpoints (mobile) the button is pinkish by default, on desktop width the button is a black outline by default.

  * Please read again: on mobile simply switch the hovered for the non-hovered state and vise-versa. The opague thing just looks out of character with the rest of the design.

* Mobile - Learn more page: padding of the balls is off in "middle breakpoints" (they seem not to have any padding on Firefox); the zoom animation does not feel right (rather have no animation than the zoom one in this case); the "Learn more ->" links miss an active/hoover state.

  * Balls become eggs now: not a fix. Please just ensure they have enough padding at all breakpoints.
  * "Learn more ->" links still need better hove/active states. (pink underline like in the StyleGuide maybe?)

* Mobile - Getting started page: padding with the screen edges seems off for *many* components at small and middle width breakpoints. Only desktop width breakpoints looks well; and the "How can I help" person widget should be centered.

  * phone number and email address still do not get centered
  * some overlapping goes wrong for middle breakpoints

* Mobile - Menu animation much better in `04 - Schermen/mobile` (EASIER POSSIBLE if following hte design here is very hard we can decide on another animation, but the current one implemented is not as cool).

  * WONTFIX4

* Mobile - The sliding transition effect is missing when (EASIER POSSIBLE if following the design here is very hard we can decide on another way of doing transitions). **DUPE WITH PREVIOUS**

* Mobile - Padding of elements on the right (arrows and cross) is to little.

  * Please ensure the padding between the cross, the arrows, the `>`s and the left window border is the SAME as elements have with the left window border side.

* Mobile - "Search..." placeholder text is not properly visible on Firefox.

  * Not fixed on my Firefox

* Mobile - Fat pink underline seems off and pushes the rest of the content down on Firefox. Making the background lighter green (after which the arrow should be in white) and/or giving it a normal white underline would work better as an active/hover state I think.

* NEW1: Mobile - The logo is blurred. Please also use SVG.

* NEW1: Mobile - Please ensure the cross is more aligned with the hamburger button. Also make sure the cross gets "link hover" mouse pointer.

* CHANGE REQUEST The favicon logo may be better, I suggest the "U" of the logo in white on the "green/blue" (dark turquoise, #204f5a) color of the design.

* How do the image and video component work? (can you include a working example maybe?)

* NEW1: There are quite some alligning issues at various breakpoints, such as elements ending up with no padding to the window edge.

* Code review: please have a look *again* for TODO strings in the comments of the code, you may replace those with your answers (so it documents itself on the spot), I have updated them.

* New error when running `yarn start`: `Error loading a result for the page query in "/en//support". Query was not run and no cached result was found. Page not found /en//support` (more of this kind are shown)

