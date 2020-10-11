// preserve newlines, etc - use valid JSON
// s = s.replace(/\\n/g, "\\n")  
//                .replace(/\\'/g, "\\'")
//                .replace(/\\"/g, '\\"')
//                .replace(/\\&/g, "\\&")
//                .replace(/\\r/g, "\\r")
//                .replace(/\\t/g, "\\t")
//                .replace(/\\b/g, "\\b")
//                .replace(/\\f/g, "\\f");
// // remove non-printable and other non-valid JSON chars
// s = s.replace(/[\u0000-\u0019]+/g,""); 
// var o = JSON.parse(s);

 /**
             * @description Converts a string response to an array of objects.
             * @param {string} string - The string you want to convert.
             * @returns {array} - an array of objects.
            */
           function stringToJson(input) {
            var result = [];

            //replace leading and trailing [], if present
            input = input.replace(/^\[/,'');
            input = input.replace(/\]$/,'');

            //change the delimiter to 
            input = input.replace(/},{/g,'};;;{');

            // preserve newlines, etc - use valid JSON
            //https://stackoverflow.com/questions/14432165/uncaught-syntaxerror-unexpected-token-with-json-parse
          input = input.replace(/\\n/g, "\\n")  
          .replace(/\\'/g, "\\'")
          .replace(/\\"/g, '\\"')
          .replace(/\\&/g, "\\&")
          .replace(/\\r/g, "\\r")
          .replace(/\\t/g, "\\t")
          .replace(/\\b/g, "\\b")
          .replace(/\\f/g, "\\f");
          // remove non-printable and other non-valid JSON chars
          input = input.replace(/[\u0000-\u0019]+/g,""); 

            input = input.split(';;;');

            input.forEach(function(element) {
              // console.log(JSON.stringify(element));

              result.push(JSON.parse(element));
            }, this);

            return result;
        }