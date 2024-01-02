# myuw-drawer changes

## 1.2.1

* Remove references to Roboto and Arial fonts and replaced with Red Hat Display and Red Hat Text

## 1.2.0

* Show subheader if "divider" attribute is present (existing implementations unaffected)
* Subheader "name" attribute no longer required (allows displaying a divider without a subheader)

## 1.1.1

* Fix cases where component might try to update a null or undefined variable

## 1.1.0

* Add divider attribute to subheader
* Change subheader to use attribute for "name" instead of a slot

## 1.0.5

* Add standard top-bar button margin to keep in sync with other button components

## 1.0.4

This patch brings a couple accessibility impovements:

* The hamburger icon is now housed in a proper button
* The drawer contents are no longer focusable by keyboard when the drawer is closed.
