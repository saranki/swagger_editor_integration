var editor, swaggerConfigs, ui;

        // Load the swagger editor in the web page
        function loadSwaggerEditor() {
           editor = SwaggerEditorBundle({
            dom_id: "#swagger-editor",
            layout: "StandaloneLayout",
            presets: [SwaggerEditorStandalonePreset]
          });
          window.editor = editor;
          editor.specActions.updateSpec(' ');
        }

        // Load the swagger ui in the web page
        function loadSwaggerUI() {
             swaggerConfigs = ({
              dom_id: '#swagger-ui',
              layout: 'BaseLayout',
              deepLinking: true,
              presets: [SwaggerUIBundle.presets.apis,SwaggerUIStandalonePreset]
            });

            ui = SwaggerUIBundle(swaggerConfigs);
            window.ui = ui;
      }
