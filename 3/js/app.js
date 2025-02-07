//Задачка на понимание происходящего: создайте компонент <Comments /> и сделайте,
//чтобы он отображался после новостей. Текст компонента: "Нет новостей -
//комментировать нечего."

//import React from 'react';
//import ReactDOM from 'react-dom';

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

    function GetData({data}){
       
        const dataTemplate = data.map(function(item,index){
            return(
                <div key={index} >
                    <p className="news_author" >{item.author} </p>
                    <p className="news_text">{item.text}</p>
                </div>

            )

        })

        return (
            <div className = "news">
           {dataTemplate}
            </div>
        )

    }





function App() {
    return( 
         <div className="app"> this is a first React app
         <br/>
           <GetData data = {my_news}/>
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)