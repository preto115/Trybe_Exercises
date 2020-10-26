// Exercício 3: Altere budget para 15 e imdbRating para 5.5 no filme Home Alone.

db.movies.updateOne(
  {title: "Home Alone"}, 
  {
    $inc: {
      imdbRating: -1.9, 
      budget: 15
    }
  }
  );

  db.movies.find().pretty();
  