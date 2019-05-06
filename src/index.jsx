
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import {Show} from "./components/Show.jsx";
// import {Header} from "./components/Header.jsx";
import {Main} from "./components/Main.jsx";
import "./components/style.scss";

const API = "5874acfd11651a28c55771624f7021f4";


 class App extends React.Component {
    constructor(props,state){
        super(props,state);
        this.state = {
            inpValue : "",               
            data:[],
            title: [],
            genre_ids:[],
            backdrop_path: [],
            id: [],
            overview: [],
            poster_path: [],
            release_date: [], 
            vote_average:[],
            vote_count:[],              
            error: []
                     
        }
    }
    
   
    handleInputChange(event){
        this.setState ({
            inpValue : event.target.value
        });
        // console.log(this.state.inpValue);
        
    }
    handlerSubmit(event){
        event.preventDefault();
        this.request()
        // console.log(this.state.inpValue);
        this.setState ({
            inpValue : ""
        }); 
        
    }
    async request()  {
        // const VALUE = value;        
        // console.log(VALUE);
        if (this.state.inpValue!==""){
            const Request = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${this.state.inpValue}`);
            const data = await Request.json();
            console.log(data); 
            data.results.map((elem,i)=>{
                this.setState({
                    data: data.results,
                    title: elem.title,
                    genre_ids: elem.genre_ids,
                    backdrop_path: elem.backdrop_path,
                    id: elem.id,
                    overview: elem.overview,
                    poster_path: elem.poster_path,
                    release_date: elem.release_date,
                    vote_average: elem.vote_average,
                    vote_count: elem.vote_count
                }) ; 
                // console.log(this.state.title)
            })
           
            
        }
        
       
        
        
        
        
       
    }
    render() {
        return (
            <div className="wrap">
                <header >
                    <form action="" onClick={this.handlerSubmit.bind(this)}>
                        <input   value={this.state.inpValue} type="text" onChange={this.handleInputChange.bind(this)}    placeholder="Search"></input>
                        <button className="btn btn-success" >Search</button>
                    </form>
                </header>
                
               
                <Main 
                    inpValue = {this.state.inpValue}
                    data = {this.state.data}
                    title = {this.state.title}
                    genre_ids = {this.state.genre_ids}
                    backdrop_path = {this.state.backdrop_path}
                    id = {this.state.id}
                    overview = {this.state.overview}
                    poster_path = {this.state.poster_path}
                    release_date = {this.state.release_date}
                    vote_average = {this.state.vote_average}
                    vote_count = {this.state.vote_count}
                />
            </div>
                 
            
           
           
        );
           
    }
    
}

ReactDOM.render(<App/>, document.getElementById('main-wrap'));