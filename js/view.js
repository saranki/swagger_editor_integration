function loadFileContentToSwaggerUI() {
        var file = document.getElementById("fileForUpload").files[0];
        if (file) {
          var reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.onload = function(evt) {
            ui.specActions.updateSpec(evt.target.result);
          };
          reader.onerror = function(evt) {
            alert("error reading file");
          };
        }
      }

document.getElementById('viewReset').onclick = function(){
         resetSwaggerUI();
         resetFileChooser();
     }