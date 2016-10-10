# tessel-mouse
Implementing a mouse with the Tessel and RobotJS

# Prerequisites
1. Get a Tessel https://tessel.io/ 
2. Get the accelerometer module
3. `npm install -g t2-cli`
4. Connect your Tessel to your computer and your wifi http://tessel.github.io/t2-start/
5. Clap your hands

# Setup
1. `git clone` and `cd tessel-mouse`
2. `npm install`
3. Change the request address in `mouse.js` to your own. Find this by holding `Option` and clicking the Wifi icon on OSX. Keep the :1337.
4. `node move.js` in one tab
5. `t2 run mouse.js` in the other
6. Forget your trackpad exists.

# Notes
1. Seriously, though, while cool, this is only a work in progress and could very likely bug out. Not sure if there is something wrong on my part or the Tessel is just not quite reliable enough yet.

