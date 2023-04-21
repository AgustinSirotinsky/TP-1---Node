fs.readFile("./txt/txt.txt", "utf8", (err, data) => {
    if (err) return console.error(err)
    console.log(data)
    fs.writeFile("./txt/txt1.txt", data , err =>{
      if (err) return console.log(err)
      console.log("El archivo fue copiado correctamente")
    })
  })