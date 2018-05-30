import React from 'react';
import imgTest from 'assets/theme/img/profile-1.jpg';
import './PostContent.css';

const PostContent = (props) => {
   return<section className="ro-post-content">
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <img src={imgTest} />
   </section>;
}

export default PostContent;