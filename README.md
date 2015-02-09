# url-shortener
A very simple URL-shortener

API (all POST requests use Content-Type: application/x-www-form-urlencoded unless otherwise mentioned):

POST /shorten
Parameters: Parameter link should contain the link to shorten.
Returns: Id for the shortened link in text/plain format.

GET /{id}
Returns: 301 redirects the user agent to a previously stored URL. 404 error if no link stored with given id.

Can be seen live at https://url-shortener-reaktor.herokuapp.com/
