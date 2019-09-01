    function loadFileContentToSwaggerEditor() {
        var file = document.getElementById("fileForUpload").files[0];
        if (file) {
          var reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.onload = function(evt) {
            editor.specActions.updateSpec(evt.target.result);
          };
          reader.onerror = function(evt) {
            alert("error reading file");

          };
        }
      }

    function updateSwaggerFile() {
          var fileName = document.getElementById("fileForUpload").files[0].name;
          const content = window.localStorage.getItem("swagger-editor-content");

          var blob = new Blob([content], {
          type: "application/json;charset=utf-8"
          });
          saveAs(blob, fileName);
        }

    document.getElementById('updateReset').onclick = function(){
         resetSwaggerEditor();
         resetFileChooser();
     }