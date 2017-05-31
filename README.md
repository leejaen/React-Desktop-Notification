## react-desktop-notification

## install
```
	npm install --save react-desktop-notification
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
		...
	}
```
## API
Notifier.start(notifier_title, notifier_context, opening_url, icon_url, window_name)

## git

https://github.com/leejaen/React-Desktop-Notification.git
