let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Enseño y ')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web')
  .pauseFor(200)
  .deleteChars(40)
  .start();

  typewriter
  .pauseFor(2500)
  .typeString('Me gusta aprender')
  .pauseFor(200)
  .deleteChars(40)
  .start();