// Función para obtener un usuario de una API
function getUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => { //then: quan tingui la resposta, fes això
      if (!response.ok) throw new Error("Error al obtener el usuario");
      return response.json();
    });
}

// Función para obtener los posts de un usuario
function getPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => {
      if (!response.ok) throw new Error("Error al obtener los posts");
      return response.json();
    });
}

// Función para obtener los comentarios del post
function getComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => {
      if (!response.ok) throw new Error("Error al obtener comentarios del post");
      return response.json();
    });
}

// Encadenando Promesas
console.log("Inicio");
/*
getUser(1) //Demano usuari 1
  .then((user) => getPosts(user.id)) //Quan tinc usuari 1 demano els posts
  .then((posts) => getComments(posts[0].id)) //Quan tinc els posts, demano els comentaris del primer post
  .then(comments => {
    console.log("Comentarios del primer post:", comments);
    console.log("Fin");
  })
  .catch(error => console.error("Error:", error));
*/
//el then serveix per a tornar a cridar les funcions amb les dades de la promesa q li havia fet


getUser(2)
.then((user) => {
  console.log("Usuari:", user.name," Username:", user.username);
  return getPosts(user.id); //Quan tinc usuari 2 demano els posts
})
.then((posts) => {
  //map per a obtenir els títols dels posts
  const postTitles = posts.map(post => post.title);

  //filter per a obtener els posts que contenen la paraula 'suscpit'
  const filteredPosts = posts.filter(post => post.body.includes('suscipit'));

  // reduce per a obtenir el número total de posts
  const totalPosts = posts.reduce((count, post) => count + 1, 0);

  console.log("Número total de posts:", totalPosts);
  console.log("Títols dels posts:", postTitles);
  console.log("Posts filtrats (contenen 'suscipit'):", filteredPosts);

  return getComments(posts[0].id); //Demano els comentaris del primer post
})
.then(comments => {
  console.log("Comentaris del primer post:", comments);
  console.log("Fin");
})
.catch(error => console.error("Error:", error));
