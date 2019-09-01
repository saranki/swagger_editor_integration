  // Clear all the input fields
        var clearTextBoxes = function (){
          var elements = document.getElementsByTagName('input');
          for (var i=0; i < elements.length; i++) {
            if (elements[i].type == 'text') {
              elements[i].value = '';
              }
            }
        }

        //  Reset dropdown
        var resetDropDown = function (){
            var elements = document.getElementsByTagName('select');
            for (var i=0; i < elements.length; i++) {
                if (elements[i].selectedIndex != 0) {
                    elements[i].selectedIndex = 0;
                }
            }
        }

        // Reset swagger editor
         var resetSwaggerEditor = function (){
            editor.specActions.updateSpec('');
         }

         // Reset swagger ui
         var resetSwaggerUI = function (){
             ui.specActions.updateSpec('');
         }

         //Reset file chooser
         var resetFileChooser = function (){
            var elements = document.getElementsByTagName('input');
            for (var i=0; i < elements.length; i++) {
                if (elements[i].type == 'file') {
                    elements[i].value = '';
                }
            }

         }