import logo from './logo.svg';
import './App.css';
var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
    },
    {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }

  ];


function Article(props){
  return (
    <div className="article ">
      <p className='author'> {props.data.author} </p>
      <p className='text'> {props.data.text} </p>
    </div>
  )
}
function News(props){
  const dataTemplate = props.dat.map(function(item,index){
     return(
      <div key = {index} >
        <Article data={item} />
      </div>
     )
  })

return (
<div className = "news">  
  {dataTemplate}
  
  <div >
    <br/>
    <div className ={dataTemplate.length > 0 ? 'left' : 'none'}>
   <strong>in total are {my_news.length} articles </strong> 
   </div> 
  </div>
</div>
)
}
function App() {
  return (
    <div className="App">
      <News dat = {my_news}/>
    </div>
  );
}



export default App;
