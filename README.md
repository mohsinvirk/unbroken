# unbroken.io — website code

This is a [Gatsby](https://www.gatsbyjs.org) (static site with React) project, based off of [gatsby-starter-default-i18n](https://github.com/angeloocana/gatsby-plugin-i18n/tree/master/packages/gatsby-starter-default-i18n). [Bulma](https://bulma.io) is the flexbox-based CSS framework used.


### Get going

`yarn` — Fetch dependencies.

`yarn start` — Start development server (with hot-reloading, by default at [localhost:8000](http://localhost:8000)).

`yarn build` — Static build optimized for production (static HTML and per-route JavaScript code bundles).

`yarn serve-build` — Serves the build locally.

`yarn format` — Clean up (prettify) the code.



### TODOs / FIXMEs

I know it's not the final delivery, but I still wanted to make sure to provide as much feedback as possible as this point.

* "unmet peer dependency" warnings when fetching deps. More info here (2nd answer seems very insightful) https://stackoverflow.com/questions/35738346/how-do-i-fix-the-npm-unmet-peer-dependency-warning

* "Using the global `graphql` tag" deprecation warning when starting development server.

* All `pt` refs may be changed to `nl` refs. And some translations for routes: `learn-more` -> `meer-leren`, `getting-started` -> `gelijk-beginnen`.

* No flag button language selection (may always route to `/` if that makes it easier).

* 404 is not styled. For styling it, please be creative (may use one of the illustration images, or whatever).

* Getting started not linked from button.

* Logo is blurry. An SVG logo is provided in the designs.

* Animations are a little confusing (they start too late and also fade-in the text), and slides would prolly work better in most cases (I'd say all cases except the 3-column parts).

* Font (not bold enough) and hover/active state on main buttons is off from `00 - Style/00-StyleGuide.jpg` and design.

* Getting started: terms of service links do not have proper hover/active states (adding an underline and changing the orange circle as with other buttons would help); FAQ links are not opening yet (and mis hover/active states).

* Links in the footer would benfit from an underline in active/hover state.

* Missing: the login page. (Called sign in page in the briefing)

* Missing: the login page with a message "Unknown combination of email address and password. Please try again." (SMALL CHANGE REQUEST i guess)

* Missing: the private beta label as explained in the briefing and additional communication.


* Mobile - The header (Ethereum made simple + man in chair) of the home page (`/`) looks not so good at some breakpoints.

* Mobile - The 3 column with "Already exchanged 3.4 mln" may center all elements as soon as it puts the 3 underneath each other (currently it only centers at small width breakpoints).

* Mobile - The "Currency for the digital ers + girl with mobile" part looks bad at "middle width" breakpoints; also the button stays too much to the right on the smallest breakpoints.

* Mobile - SMALL CHANGE REQUEST In the 3-column starting with "01- [...] Sign up" it would be nice if the the default and active/hoover states is switched compared to the desktop variant. So that on small breakpoints (mobile) the button is pinkish by default, on desktop width the button is a black outline by default.

* Mobile - Spacing between the "Secure" titled textblock and the "Sign up" button is a little too small.

* Mobile - Spacing in the footer is not correct at small breakpoints. Too little padding on the left and the spacing between the titles and the links should collapse at small break points.

* Mobile - Learn more page: padding of the balls is off in "middle breakpoints" (they seem not to have any padding on Firefox); the zoom animation does not feel right (rather have no animation than the zoom one in this case); the "Learn more ->" links miss an active/hoover state.

* Mobile - Getting started page: padding with the screen edges seems off for *many* components at small and middle width breakpoints. Only desktop width breakpoints looks well; and the "How can I help" person widget should be centered.

* Mobile - Menu animation much better in `04 - Schermen/mobile` (EASIER POSSIBLE if following hte design here is very hard we can decide on another animation, but the current one implemented is not as cool).

* Mobile - Menu logo is blurry, an SVG would help a lot here as well (provided in the designs).

* Mobile - Padding of elements on the right (arrows and cross) is to little.

* Mobile - "Search..." placeholder text is not properly visible on Firefox.

* Mobile - Fat pink underline seems off and pushes the rest of the content down on Firefox. Making the background lighter green (after which the arrow should be in white) and/or giving it a normal white underline would work better as an active/hover state I think.

* Mobile - The sliding transition effect is missing when (EASIER POSSIBLE if following the design here is very hard we can decide on another way of doing transitions).

* CHANGE REQUEST The favicon logo may be better, I suggest the "U" of the logo in white on the "green/blue" (dark turquoise, #204f5a) color of the design.

* How do the image and video component work? (can you include a working example maybe?)

* Code review: please look for TODO and FIXME strings in the comments of the code, you may replace those with your answers (so it documents itself on the spot).



