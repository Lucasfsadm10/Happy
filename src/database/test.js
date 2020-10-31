const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
   await saveOrphanage(db, {
       lat: "-27.222633",
       lng: "-49.655874",
       name: "Lar dos meninos",
       about:
       "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
       whatsapp: "2126636295",
       images: [
       "https://images.unsplash.com/photo-1573924436910-447d0d2176c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

       "https://images.unsplash.com/photo-1595295410103-402cb7cb0254?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
       ].toString(),
       instructions:
       "Venha se sentir a vontade e traga muito amor e carinho para dar.",
      opening_hours: "Horário de visitas das 8h às 18h",
       open_on_weekends: "0",
    });

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

  // consultar somente 1 orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
  console.log(orphanage)

  // delete dados na tabela
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
  //console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
});
