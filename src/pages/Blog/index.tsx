import React from 'react';
import { Divider, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Post, { PostInfo } from "../../components/Post";
import Carreira from "../../assets/img/carreira.jpg";
import Filme from "../../assets/img/dark.png";
import Livro from "../../assets/img/livro.png";

import "./style.scss";
const Blog = () => {
  const [items, setItems] = useState<PostInfo[]>([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        category: "Carreira",
        description: "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor frontend.",
        thumb: Carreira,
        title: "5 dicas para sua carreira profissional",
        year: 2022,
      },
      {
        id: 2,
        category: "Leitura",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        thumb: Livro,
        title: "Livros para profissionais de tecnologia",
        year: 2022,
      },
      {
        id: 3,
        category: "Entretenimento",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        thumb: Filme,
        title: "Dicas de filmes para o fim de semana",
        year: 2022,
      },
    ]);
  }, []);

  return (
    <section id="blog">
      <h2 className="subtitle">Últimas do Blog</h2>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        {items.map((item) => (
          <Post {...item}></Post>
        ))}

        <p className="text-pink direita pointer">Ver Tudo</p>
      </Stack>
    </section>
  );
};

export default Blog;
