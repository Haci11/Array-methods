fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    // 1. Gå igenom alla post och skapa en ny array som innehåller enbart userId och id. Den nya arrayen ska heta

    const userIds = posts.map((post) => {
      return {
        userId: post.userId,
        id: post.id,
      };
    });

    const uderTwo = posts.map(({ userId, id }) => ({ userId, id }));

    // 1.2  Ett vanligt problem som du kommer behöva lösa när du jobbar med data är att ändra formatet på det. Du kommer behöva göra det för Klarna checkouten bland annat. I listan just nu hittar du { userId, id, title, body }. Jag vill att du skapar en ny lista som ser likadan ut förutom att du döper om userId till user och grupperar title och body tillsammans i ett object som heter postContent. Så här ska arrayen se ut [{user, id, postContent: {title, body}},{user, id, postContent: {title, body}},...]

    // 2. Gå igenom usersAndIds och filtrera efter userId som är jämna tal. Spara dessa värden i en array som heter evenUsersAndIds

    // 3. Jag vill att du skapar en ny array som bara innehåller posts från användaren med userId 2.

    // 4. Din uppgift är att formatera om datan i postFromUser2. Jag vill att du ska ändra från att ha en array med posts till att ha ett objekt med två fält.
    // Det ena fältet ska vara userId och det andra fältet ska vara posts. Posts fältet ska vara en array som innehåller objekt med informationen {title, id, body}.
    // På så sätt slipper vi upprepa userId flera gånger och grupperar alla posts som en användare har skapat och lägger dem i ett objekt. Formatera om datan med reduce metoden.

    // 5.
  });
