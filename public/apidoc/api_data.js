define({ "api": [
  {
    "type": "get",
    "url": "/professoras",
    "title": "Retorna a lista de professoras",
    "name": "ListarProfessoras",
    "group": "Professoras",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Retorna",
            "description": "<p>a lista de professoras.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/professorasRoute.js",
    "groupTitle": "Professoras"
  }
] });
