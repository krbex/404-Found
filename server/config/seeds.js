const db = require("./connection");
const { User, Game } = require("../models");

db.once("open", async () => {
  await Game.deleteMany();

  const games = await Game.insertMany([
    {
      name: "Crisis Core - Final Fantasy VII",
      description:
        "Zack Fair, a young warrior admired by the boy destined to save the world, trusted by men renowned as heroes of legend, and loved by the girl who holds the fate of the planet in her hands.",
      image: "crisis-core.webp",
      youtube: "youtube-crisis-core.webp",
      ytUrl: "65lCz22aopY",
      price: 69.99,
      quantity: 10,
    },
    {
      name: "Blacktail",
      description:
        "Become the guardian of the woods or the terror nightmares are made of in BLACKTAIL, a unique blend of intense archery combat, magic and dark storytelling set in a vibrant fairy tale world.",
      image: "blacktail.webp",
      youtube: "youtube-blacktail.webp",
      ytUrl: "YS1DS1-DD6M",
      price: 29.99,
      quantity: 10,
    },
    {
      name: "Romancing sage 3",
      description:
        "Once every 300 years, the Rise of Morastrum threatens the existence of our world. All born in that year are doomed to perish before its end. However, there came a time when a sole child did survive. He was using the power of death to conquer the world.",
      image: "romancing-sage-3.webp",
      youtube: "youtube-romancing-sage-3.webp",
      ytUrl: "38-4NlwQVv8",
      price: 28.99,
      quantity: 10,
    },
    {
      name: "The Witcher 3: Wild Hunt ",
      description:
        "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
      image: "the-witcher-3.jpeg",
      youtube: "youtube-the-witcher-3.webp",
      ytUrl: "XHrskkHf958",
      price: 24.99,
      quantity: 10,
    },
    {
      name: "River City Girls 2",
      description:
        "The River City Girls are ready for round 2! When an old foe returns for revenge, Misako, Kyoko, Kunio, and Riki - joined by newcomers Marian and Provie - hit the streets for an all-new beat-'em-up adventure packed with new abilities, enemies, allies, locations, and more! ",
      image: "river-city-girls-2.webp",
      youtube: "youtube-river-city-girls-2.webp",
      ytUrl: "_CHZvH7T-QA",
      price: 69.99,
      quantity: 10,
    },
    {
      name: "Street Fighter V",
      description:
        "Rule the ring with Street Fighter™ V: Champion Edition, the most robust version of the acclaimed fighting game!",
      image: "street-fighter-v.webp",
      youtube: "youtube-street-fighter-v.webp",
      ytUrl: "0nFd7Iylj5A",
      price: 29.99,
      quantity: 10,
    },
    {
      name: "Resident Evil 4",
      description:
        "Agent Leon S. Kennedy, one of the survivors of the incident, has been sent to rescue the president's kidnapped daughter.He tracks her to a secluded European village, where there is something terribly wrong with the locals.",
      image: "resident-evil-4.webp",
      youtube: "youtube-resident-evil-4.webp",
      ytUrl: "gTMwx9-rKe8",
      price: 69.99,
      quantity: 10,
    },
  ]);

  console.log("games seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Please",
    lastName: "Work",
    email: "HelloWorld@email.com",
    password: "password12345",
    orders: [
      {
        games: [games[0]._id, games[0]._id, games[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "David",
    lastName: "Test",
    email: "test1111@email.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
