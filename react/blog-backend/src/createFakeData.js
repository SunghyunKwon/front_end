import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트 #${i}`,
    body: 'Although the phrase is nonsense, it does have a long history. The phrase has been used for several centuries by typographers to show the most distinctive features of their fonts. It is used because the letters involved and the letter spacing in those combinations reveal, at their best, the weight, design, and other important features of the typeface.',
    tags: ['가짜', '데이터'],
  }));
  
  Post.insertMany(posts, (error, docs) => {
    console.log(docs);
  })
}

