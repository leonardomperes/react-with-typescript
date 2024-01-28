import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";


// simular backend
const posts =[
  {
    id:1,
    author: {
      avatarUrl:"https://github.com/leonardomperes.png",
      name:"Leonardo Peres",
      role:"Developer"
    },
    content:[
      {type:"paragraph", content: "Fala galeraa 👋"},
      {type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type:"link", content: "👉 jane.design/doctorcare"},
      {type:"link", content: "#novoprojeto"},
      {type:"link", content: "#nlw"},
      {type:"link", content: "#rocketseat"},

    ],
    publishAt: new Date('2024-01-24 08:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl:"https://github.com/maykbrito.png",
      name:"Mayk Brito",
      role:"Developer - rocketseat"
    },
    content:[
      {type:"paragraph", content: "Fala galeraa 👋"},
      {type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type:"link", content: "👉 jane.design/doctorcare"},
      {type:"link", content: "#novoprojeto"},
      {type:"link", content: "#nlw"},
      {type:"link", content: "#rocketseat"},

    ],
    publishAt: new Date('2024-01-22 18:22:11')
  },
]





 

  
function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar/>

        <main>
          {posts.map((post)=>{
            return( 
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
                />
              )
          })}
        </main>
      </div>
    </>
  );
}

export default App;
