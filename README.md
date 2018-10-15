## react-desktop-notification

* Use browser's desktop notification in React. It depends on notifications API of chrome or else browser's other way.

## install
```
npm install --save react-desktop-notification
OR
yarn add react-desktop-notification

```

## usage
```
import Notifier from "react-desktop-notification"

gotNewNotification(){
  ...
  //Here will pop a notifier and always open in a new window when clicked.
  Notifier.start("Title","Here is context","www.google.com","validated image url");

	//Here will pop notifier and open in a specified name window "popwin1" when clicked.
	Notifier.start("Title","Here is context","www.google.com","validated image url","popwin1");

	//Here will pop notifier and focus parent window only when clicked.
	Notifier.focus("Title","Here is context","www.google.com","validated image url");
	...
}

```
## API
`Notifier.start(notifier_title, notifier_context, opening_url, icon_url, window_name)`

`Notifier.focus(notifier_title, notifier_context, opening_url, icon_url)`

## git

https://github.com/leejaen/React-Desktop-Notification.git

## contributors

* Oscar Ruckdeschel: https://github.com/ibiBgOR

* Johnathan Saunders: https://github.com/SirSaunders

* Alexandre Amoedo Amorim: https://github.com/amoedoamorim

BIG Thanks!