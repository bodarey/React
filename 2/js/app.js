//Задачка на понимание происходящего: создайте компонент <Comments /> и сделайте,
//чтобы он отображался после новостей. Текст компонента: "Нет новостей -
//комментировать нечего."





function Comments() {
    return ("This is a comment")
}

function News(){
    return ("this is are news ")


}
function App() {
    return( 
         <div className="app"> this is a first React app
         <br/>
             <News />
             <br/>
             <Comments />
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)