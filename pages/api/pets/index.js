const gatos = []
/*
      {
        "nombre": "Fidel",
        "edad": 2,
        "peso": "6kg",
        "descripcion": "Gato blanco y negro",
        "avatar": "/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg"
      },
      {
        "nombre": "Fidel",
        "edad": 2,
        "peso": "6kg",
        "descripcion": "Gato blanco y negro",
        "avatar": "/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg"
      },
      {
        "nombre": "Fidel",
        "edad": 2,
        "peso": "6kg",
        "descripcion": "Gato blanco y negro",
        "avatar": "/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg"
      },
      {
        "nombre": "Fidel",
        "edad": 2,
        "peso": "6kg",
        "descripcion": "Gato blanco y negro",
        "avatar": "/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg"
      },
      {
        "nombre": "Fidel",
        "edad": 2,
        "peso": "6kg",
        "descripcion": "Gato blanco y negro",
        "avatar": "/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg"
      },
      {
        "nombre": "Fidel",
        "edad": 2,
        "peso": "6kg",
        "descripcion": "Gato blanco y negro",
        "avatar": "/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg"
      },
      {
        "nombre": "Fidel",
        "edad": 2,
        "peso": "6kg",
        "descripcion": "Gato blanco y negro",
        "avatar": "/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg"
      }
    ]


*/

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(gatos))
}