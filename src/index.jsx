
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Main} from "./components/Main.jsx"; //Если создаешь Main компонент, то пусть он содержит весь реакт код, а то не понятно почему он так называется 
import "./components/style.scss";

const API = "5874acfd11651a28c55771624f7021f4";

// В джаваскрипте принято называть переменные camleCase
let arr_pagination = [1,2,3,4,5,6,7,8,9]; 
let arr_Year_select = [];
let pageNumber=1;
let arr_pag_pages = [];
let count_pag =0;
let count_pag_2=0;

//Лучше вынести в функцию getYearSelectArray или тип того
for(let y=1900;y<2020;y++){
    arr_Year_select.push(y);
}
arr_Year_select = arr_Year_select.reverse(); // Сделай фор let y=2020;y>1900;y--

 class App extends React.Component {
    constructor(props,state){
        super(props,state);
        this.state = {
            year_select:2019,
            SortBy_select:"popularity.desc",
            Genres_select:28,
            inpValue : "",  
            next_pagination:0,
            page:1,
            currentPage:0,
            data:[],
            total_pages:0,
            title: [],
            genre_ids:[],
            backdrop_path: [],
            id: [],
            overview: [],
            poster_path: [],
            release_date: [], 
            vote_average:[],
            vote_count:[],              
            load: false
                     
        }
    }
    
    
    handleYearSelectChange(event){
        this.setState ({            
            year_select:event.target.value ,
            inpValue : ""      
        });
        this.request(pageNumber,event.target.value,this.state.SortBy_select,this.state.Genres_select,"");
        
      
    }
    handleSortBySelectChange(event){
        this.setState ({            
            SortBy_select:event.target.value ,
            inpValue : ""      
                    
        });
        this.request(pageNumber,this.state.year_select,event.target.value,this.state.Genres_select,"");
        
    }
    handleGenresSelectChange(event){
        this.setState ({            
            Genres_select:event.target.value,
            inpValue : ""      
            
              
        });
        this.request(pageNumber,this.state.year_select,this.state.SortBy_select,event.target.value,"");
        
    }
    handleInputChange(event){
        this.setState ({
            inpValue : event.target.value           
        });       
        this.request(pageNumber,this.state.year_select,this.state.SortBy_select,this.state.Genres_select,event.target.value );
    }
    handlerDefault(pageNumber){
        
        this.request(pageNumber,this.state.year_select,this.state.SortBy_select,this.state.Genres_select,this.state.inpValue );
        // console.log(pageNumber);
        
    }
    async request(pageNumber,year,sort,gender,inputText)  {
        // вынести в функцию getUrl
       let type ,query, primary_release_year_value, 
       with_genres_value ,sort_by_value; 
       if (inputText!==""){
        type = "search";
        query=`query=${inputText}`;
        primary_release_year_value ="";
        with_genres_value = "";
        sort_by_value = "";

       }else{
        
        type = "discover";
        query = "";
        primary_release_year_value= `primary_release_year=${year}`;
        with_genres_value = `with_genres=${gender}` ;
        sort_by_value = `sort_by=${sort}`;
       }
       
        //С большой буквы называют только классы
        const Request = await fetch(`https://api.themoviedb.org/3/${type}/movie?api_key=${API}&${query}&page=${pageNumber}&${sort_by_value}&${with_genres_value}&${primary_release_year_value}`);
        const data = await Request.json();
        console.log(data); 
        //Что тут происходит??
        data.results.map((elem,i)=>{
            this.setState({                
                currentPage:pageNumber,                
                page:data.page,
                total_pages: data.total_pages,
                data: data.results,
                title: elem.title,
                genre_ids: elem.genre_ids,
                backdrop_path: elem.backdrop_path,
                id: elem.id,
                overview: elem.overview,
                poster_path: elem.poster_path,
                release_date: elem.release_date,
                vote_average: elem.vote_average,
                vote_count: elem.vote_count,
                load:true
            }) ; 
           
        })
           
        
           
        
        
    }


    showPages(){
            arr_pag_pages = [];
            
            if(this.state.total_pages>9){
                // console.log("this.state.total_pages = " + this.state.total_pages);
                count_pag = 9;
                
            }else{
                // console.log("total_pages >= 9 ------" + this.state.total_pages);
                count_pag = this.state.total_pages;
            }
           
            for(let f = 1; f<count_pag+1;f++){
                arr_pag_pages.push(f);
            }
           
    }
    
    hendlerNext(currentPage){
        currentPage++; 
        console.log("currentPage = " + currentPage);
        if (currentPage>this.state.total_pages){
            currentPage = 1;
        }
        this.request(currentPage,this.state.year_select,this.state.SortBy_select,this.state.Genres_select,this.state.inpValue );
    
         
        
    }
    hendlerPrevious(currentPage){
        currentPage--; 
        console.log("currentPage = " + currentPage);
        if (currentPage<1){
            currentPage = this.state.total_pages;
        }
        this.request(currentPage,this.state.year_select,this.state.SortBy_select,this.state.Genres_select,this.state.inpValue );
    
         
        
    }

   showPagination(){
        if(this.state.load===false){
           
         this.handlerDefault(pageNumber);
        }else {
            return (
                
                <nav className="navigation" aria-label="Page navigation ">
                    <ul className="pagination">
                        <li className="page-item"  onClick={()=> this.hendlerPrevious(this.state.currentPage)}><a className="page-link" href="#">Previous</a></li>
                            { this.showPages()}
                            {
                                 
                                 arr_pag_pages.map((el,i)=>{
                                   
                                    return (
                                        <li  key={i} className=" page-item "  onClick={()=>  this.handlerDefault(el)}>
                                            <a className="page-link" href="#">{el}</a>
                                        
                                        </li>
                                    )
                                })
                            }
                        
                        <li className="page-item"  onClick={()=> this.hendlerNext(this.state.currentPage)}><a className="page-link" href="#">Next</a></li>
                    </ul>
                    </nav> 
               
               
            );
               
        }
    }


    

    render() {
            return (
                <div className="wrap">
                 
                <header >
                    //Это все должно быть отдельным компонентом
                        <form action="" >
                             
                            <div className="wrap-for-select">
                            <div className="years-select">
                                <p>Year</p>
                                <select className="form-control"  onChange={this.handleYearSelectChange.bind(this)}>
                                {arr_Year_select.map((year,j)=>{
                                    return <option key={j}>{year}</option>
                                })}
                                </select>
                            </div>
                            
                            <div className="SortBy-select">
                                <p>Sort By</p>
                                <select className="form-control"  onChange={this.handleSortBySelectChange.bind(this)}>
                                    <option value="popularity.desc" >Popularity Descending</option>
                                    <option value="popularity.asc">Popularity Ascending</option>
                                    <option value="vote_average.desc">Rating Descending</option>
                                    <option value="vote_average.asc">Rating Ascending</option>
                                    <option value="primary_release_date.desc">Release Date Descending</option>
                                    <option value="primary_release_date.asc">Release Date Ascending</option>
                                    <option value="title.asc">Title (A-Z)</option>
                                    <option value="title.desc">Title (Z-A)</option>
                                </select>
    
                            </div>
    
                            <div className="Genres-select">
                                <p>Genres</p>
                                <select className="form-control"  onChange={this.handleGenresSelectChange.bind(this)}>
                                    //опшены должны генерироваться через мап а не писаться руками
                                    <option value="28" >Action</option>
                                    <option value="12">Adventure</option>
                                    <option value="16">Animation</option>
                                    <option value="35">Comedy</option>
                                    <option value="80">Crime</option>
                                    <option value="99">Documentary</option>
                                    <option value="18">Drama</option>
                                    <option value="10751">Family</option>
                                    <option value="14">Fantasy</option>
                                    <option value="36">History</option>
                                    <option value="27">Horror</option>
                                    <option value="10402">Music</option>
                                    <option value="9648">Mystery</option>
                                    <option value="10749">Romance</option>
                                    <option value="878">Science Fiction</option>
                                    <option value="10770">TV Movie</option>
                                    <option value="53">Thriller</option>
                                    <option value="10752">War</option>
                                    <option value="37">Western</option>
                                </select>
                            </div>
                            </div>
                            
                            <div className="Search">
                                <p>Search</p>
                                <input   value={this.state.inpValue} type="text" onChange={this.handleInputChange.bind(this)}    placeholder="Search for a movie, tv show, person..." className="form-control search-input"></input>
                            </div>  
                             
                            
                            <button  style={{display: "none"}}></button>
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
    
    
                   
                    // Отдельный компонент
                    {this.showPagination()}
                </div>
            )
        }
}

ReactDOM.render(<App/>, document.getElementById('main-wrap'));
