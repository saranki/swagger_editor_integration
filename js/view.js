function loadFileContentToSwaggerUI() {
        var file = document.getElementById("fileForUpload").files[0];
        if (file) {
          var reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.onload = function(evt) {
            document.getElementById("contents").innerHTML = evt.target.result;
            //const content = window.localStorage.getItem("swagger-ui-preview");
            //document.getElementById("preview").innerHTML = content;

            ui.specActions.updateSpec(evt.target.result);
          };
          reader.onerror = function(evt) {
            document.getElementById("contents").innerHTML =
              "error reading file";
          };
        }
      }
