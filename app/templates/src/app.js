require("./index.html.jade");
require("./main.styl");

<% if (includeAngular) { %>
var angular = require("angular");

angular.module = angular.module("<%= appname %>", [
]);<% } %>


console.log("hello world");
