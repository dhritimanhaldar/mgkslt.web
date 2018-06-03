**First time run**
npm install

**To build:**
npm run build

Above command will create a "dist" folder which is to be put on the nginx server.

Server location is at /usr/share/nginx/html/
**In nginx, modify the root location and 400 page:**

location / {
            root   html;
            index  index.html index.htm;
        }
        error_page 404 =200 /index.html;