  // Clear all the input fields
        function clearTextBoxes(){
          var elements = document.getElementsByTagName("input");
          for (var i=0; i < elements.length; i++) {
            if (elements[i].type == "text") {
              elements[i].value = "";
              }
            }
        }

        //  reset dropdown
        function resetDropDown(){
                  var elements = document.getElementsByTagName("select");
                  for (var i=0; i < elements.length; i++) {
                    if (elements[i].selectedIndex != 0) {
                      elements[i].selectedIndex = 0;
                      }
                    }
                }

        // Reset swagger editor
         function resetSwaggerEditor(){
            editor.specActions.updateSpec(' ');
         }


document.getElementById('addReset').onclick = function(){
    clearTextBoxes();
    resetDropDown();
    resetSwaggerEditor();
}