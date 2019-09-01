// Load the swagger editor in the web page
var editor, swaggerConfigs, ui;

        function loadSwaggerEditor() {
           editor = SwaggerEditorBundle({
            dom_id: "#swagger-editor",
            layout: "StandaloneLayout",
            presets: [SwaggerEditorStandalonePreset]
          });
          window.editor = editor;
          editor.specActions.updateSpec(' ');
        }

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
