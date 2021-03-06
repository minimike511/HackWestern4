/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'default everyone'
		},
		/*{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			},
			classes: 'michael'
		},*/
		{
			module: "msgtoday",
            position: "lower_third",
            config: {
                printName: "handsome"
            },
            classes: 'default'
		},
        {
            module: "msgtoday",
            position: "lower_third",
            config: {
                printName: "Michael"
            },
            classes: 'michael'
        },
        {
            module: "msgtoday",
            position: "lower_third",
            config: {
                printName: "Harrison"
            },
            classes: 'harrison'
        },
		/*{
			module: "insults",
			position: "lower_third",
			classes: 'everyone'
		},*/
		/*{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},*/
		/*{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},*/
		{
            module: 'MMM-Facial-Recognition',
            config: {
                // 1=LBPH | 2=Fisher | 3=Eigen
                recognitionAlgorithm: 1,
                // Threshold for the confidence of a recognized face before it's considered a
                // positive match.  Confidence values below this threshold will be considered
                // a positive match because the lower the confidence value, or distance, the
                // more confident the algorithm is that the face was correctly detected.
                lbphThreshold: 40,
                fisherThreshold: 250,
                eigenThreshold: 3000,
                // force the use of a usb webcam on raspberry pi (on other platforms this is always true automatically)
                useUSBCam: true,
                // Path to your training xml
                trainingFile: 'modules/MMM-Facial-Recognition/training.xml',
                // recognition intervall in seconds (smaller number = faster but CPU intens!)
                interval: 0.1,
                // Logout delay after last recognition so that a user does not get instantly logged out if he turns away from the mirror for a few seconds
                logoutDelay: 60,
                // Array with usernames (copy and paste from training script)
                users: ["Harrison Chow", "Michael Park"],
                //Module set used for strangers and if no user is detected
                defaultClass: "default",
                //Set of modules which should be shown for every user
                everyoneClass: "everyone",
                // Boolean to toggle welcomeMessage
                welcomeMessage: true
            }
		},
        /*{
            module: 'example_module',
            position: 'top_right',
            //Set your classes here seperated by a space.
            //Shown for all users
            classes: 'default everyone'
        },
        {
            module: 'example_module',
            position: 'bottom_right',
            //Set your classes here seperated by a space.
            //Shown for all users
            classes: 'harrison'
        },
        {
            module: 'example_module',
            position: 'bottom_right',
            //Set your classes here seperated by a space.
            //Shown for all users
            classes: 'michael'
        },*/
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
