// function Card(props) {
//   return (
//     <div className="card">
//       <img className="card-img-top" src={props.featureImage} alt={props.title} />
//       <div className="card-body">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-text">{props.description}</p>
//         <a href={props.link} className="btn btn-primary">Learn more</a>
//       </div>
//     </div>
//   );
// }
const  CardList = [
  {
    featureImage: "https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png",
    title: "JavaScript Basics Before You Learn React",
    description: "Learn the prerequisites of learning React fast",
    link: "https://sebhastian.com/js-before-react"
  },
  {
    featureImage:  "https://fazendoanossafesta.com.br/wp-content/uploads/2016/09/Cartao-Bis-Lembrancinha-Dia-dos-Professores-7.jpg",
    title: "Struggling with image on React",
    description: "Trying to put some image on React project",
    link: ""
  },
  {
    featureImage:  "https://s3-sa-east-1.amazonaws.com/agendor-blog-uploads/2015/10/12195343/frases-vendedores.jpg",
    title: "Para o alto e avante",
    description: "Não desista dos seus sonhos!",
    link: ""
  },
  {
    featureImage:  "https://www.catho.com.br/carreira-sucesso/wp-content/uploads/sites/3/2012/06/shutterstock_641874724.jpg",
    title: "Nao pense, faça!",
    description: "Gaste seu tempo executando ao invez de ficar so planejando.",
    link: ""
  },
  {    
    featureImage: "https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png",
    title: "How To Make Interactive ReactJS For",
    description: "Let's write some interactive form with React",
    link: "https://sebhastian.com/interactive-react-form"
  },
  {
    featureImage: "https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png",
    title: "Babelify your JavaScript code",
    description: "Babel make JavaScript code browser-compatible.",
    link: "https://sebhastian.com/babel-guide"
}
]
export default  CardList;