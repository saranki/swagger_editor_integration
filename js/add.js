       // Save the created swagger API definition a file locally
        function createSwaggerFile() {
          // Get the user input values for swagger file name, version and swagger version
          var fileName = document.getElementById("name").value;
          var version = document.getElementById("version").value;

          // Get the content in the swagger editor
          const content = window.localStorage.getItem("swagger-editor-content");

          // Create file containing swagger context from the editor and save it locally
          var blob = new Blob([content], {type: "application/json;charset=utf-8"});

          if(!fileName || !version)
          {
            alert("Please provide filename and version");
          }
          else
            saveAs(blob, fileName + "_" + version + ".json");
          }


        var getSelectedSwaggerVersion = function(){
        var value;
            var swaggerVersion = document.getElementById('swaggerVersion');
                var ver = swaggerVersion.options[swaggerVersion.selectedIndex].value;

                if(ver=="2.0")
                    value = "swagger: \""+ver+"\"\r\npaths: {}\r\ninfo:\r\n  title: \"\"\r\n  version: \"\"";
                else
                    value = "openapi: \""+ver+"\"\r\npaths: {}\r\ninfo:\r\n  title: \"\"\r\n  version: \"\"";

                editor.specActions.updateSpec(value);
        }
