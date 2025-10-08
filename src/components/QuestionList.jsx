// Dependencies
import { getPosts, getPostsById } from "../services/api.js";
import { useState, useEffect } from "react";

// Components
import Post from "./Post.jsx";

// Stylesheets
import styles from "./QuestionList.module.css";

// Componente para renderizar a lista de perguntas de exemplo
function QuestionList({ userId, ppt = 5 }) {
  // Constante responsável por definir quantos posts vão aparecer na tela
  const POSTS_POR_TELA = ppt;

  // Estados do React
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [pagesList, setPagesList] = useState([]);

  // useEffect responsável por abstrair a construção do componente
  useEffect(() => {
    handleGetPosts();
  }, []);

  async function handleGetPosts() {
    let response;
    // Obtém a resposta do servidor
    if (userId) {
      response = await getPostsById(userId);
    } else {
      response = await getPosts();
      console.log(response);
    }

    // Se o sucesso não for 200, finaliza a função
    if (response?.success !== true) return;

    // Adquirindo a lista de posts
    const postsList = response?.post;

    // Alterando o estado de posts
    setPosts(postsList);

    console.log

    // Calculando quantos posts tem
    const postsLength = postsList.length;

    // Número de páginas total
    const pagesNumber = Math.ceil(postsLength / POSTS_POR_TELA);

    // Criando a variável da nova lista
    let newPagesList = [];

    // Adicionando as páginas na lista de páginas
    for (let i = 1; i <= pagesNumber; i++) {
      newPagesList = [...newPagesList, i];
    }

    // Alterando o estado da lista de páginas
    setPagesList(newPagesList);
  }

  return (
    <>
      {posts.slice((page - 1) * POSTS_POR_TELA, page * POSTS_POR_TELA).map((post, index) => {
        return (
          <Post
            key={index}
            message={post.message}
            userId={post.user_id}
            userName={post.username}
            userImage={post.user_image}
            imageUrl={post.post_img}
          />
        );
      })}
      <div className={styles.pages}>
        {page - 1 > pagesList[0] && <p onClick={() => setPage(pagesList[0])}>{pagesList[0]}...,</p>}
        {page - 1 > 0 && <p onClick={() => setPage(page - 1)}>{pagesList[page - 2]},</p>}
        <p className={styles.active}>
          {pagesList[page - 1]}
          {page + 1 <= pagesList.length && ","}
        </p>
        {pagesList.includes(page + 1) && (
          <p onClick={() => setPage(page + 1)}>
            {pagesList[page]}
            {page + 1 < pagesList.length && ","}
          </p>
        )}
        {page + 1 < pagesList.length && (
          <p onClick={() => setPage(pagesList[pagesList.length - 1])}>...{pagesList[pagesList.length - 1]}</p>
        )}
      </div>
    </>
  );
}

export default QuestionList;
