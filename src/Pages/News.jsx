import React, { useEffect, useState } from 'react'
import BgImage from '../assets/imgs/tmsph-ls-midafood.jpeg'
import { BiSolidUpArrow } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import Article from '../components/Article';
import PageCard from '../components/PageCard';
const News = () => {

  const [authors, setAuthors] = useState();
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);

  const pageNumbers = ['<',1,2,'...',8,9,10,11,12,13,14,'...',56,57,'>'];
  const selectedPage = 11;

  useEffect(() => {
    // Fetch data from News
    fetch('https://tmsph-sdi-challenges.pages.dev/challenges/news.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setNews(data);
        setLoading(false);
        console.log(data);
      })
    

      // Fetch Data from authors
      fetch('https://tmsph-sdi-challenges.pages.dev/challenges/authors.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setAuthors(data);
        console.log(data);
      })


  }, []);


  const getAuthorName = (authorId) => {
    const author = authors.find(a => a.id === authorId);
    return author ? author.name : 'Unknown Author';
  };

  if (loading) {
    return <div className='flex justify-center items-center w-full h-screen'>Loading...</div>;
  }

  return (
    <div className='w-full h-screen bg-white'>
      {
        news.map((item, index) => (
          
          <Article bg={item.image_url} authorName={getAuthorName(item.author_id)} body={item.body} dateCreated={item.created_at} title={item.title}></Article>
        ))
      }

      {/* Page Number For the page numbers I just used fixed values cuz I don't have data's where I can apply the page number */}
      <div className='flex flex-wrap justify-center gap-2 m-5 pb-5'>
        {
        pageNumbers.map((page) => (
          <PageCard selected={selectedPage} pageNumber={page}></PageCard>
        ))
      }
      </div>
    </div>
  )
}

export default News