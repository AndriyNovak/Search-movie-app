async request()  {
    // const VALUE = value;        
    // console.log(VALUE);
    if (this.state.inpValue!==""){
        const Request = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${this.state.inpValue}`);
        const data = await Request.json();
        console.log(data); 
        this.setState({
            data:data.results,
            title: data.results.title,
            // genre_ids: genre_ids_arr,
            // backdrop_path: backdrop_path_arr,
            // id: id_arr,
            // overview: overview_arr,
            // poster_path: poster_path_arr,
            // release_date: release_date_arr,
            // vote_average: vote_average_arr,
            // vote_count: vote_count_arr
        
    }) ; 
    }
    
   
    
    
    
    
    
    // let arr = [];
    // let title_arr = [];
    // let genre_ids_arr = [];
    // let backdrop_path_arr = [];
    // let id_arr = [];
    // let overview_arr = [];
    // let poster_path_arr = [];
    // let release_date_arr = [];
    // let vote_average_arr = [];
    // let vote_count_arr = [];
    // const Request = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&include_adult=false&include_video=false&page=1`);
    // const data = await Request.json();
    // // console.log(data);
    // data.results.forEach(function(elem){
    //     // console.log(elem.title);
    //     title_arr.push(elem.title);
    //     genre_ids_arr.push(elem.genre_ids);
    //     backdrop_path_arr.push(elem.backdrop_path);
    //     id_arr.push(elem.id);
    //     overview_arr.push(elem.overview);
    //     poster_path_arr.push(elem.poster_path);
    //     release_date_arr.push(elem.release_date);
    //     vote_average_arr.push(elem.vote_average);
    //     vote_count_arr.push(elem.vote_count);
        
        
          
    // }) 
    // // arr.push(title_arr,genre_ids_arr,backdrop_path_arr,id_arr,overview_arr,poster_path_arr,
    // //     release_date_arr,vote_average_arr,vote_count_arr);
    // this.setState({
    //     data:data.results,
    //     title: title_arr,
    //     genre_ids: genre_ids_arr,
    //     backdrop_path: backdrop_path_arr,
    //     id: id_arr,
    //     overview: overview_arr,
    //     poster_path: poster_path_arr,
    //     release_date: release_date_arr,
    //     vote_average: vote_average_arr,
    //     vote_count: vote_count_arr
        
    // }) ; 
    // console.log(this.state.data);
    
    // let Array.from(this.state.data);
    // this.state.data.map((elem, i)=>(
    //     console.log(elem.title)
    // ))
    // return (
    //     <div>{this.state.dataResults}</div>
    // )
    // this.setState({
    //     title: this.state.title.push(data.results[0].title)
    // }) ;
    // console.log(this.state.title);
    // this.state.title.map((elem, i)=>(
    //     console.log(elem)
    // ))
}
render() {
    return (
        <div>
            <header className="container">
                <form action="" onClick={this.handlerSubmit.bind(this)}>
                    <input  value={this.state.inpValue} type="text" onChange={this.handleInputChange.bind(this)}    placeholder="Search"></input>
                    <button  >Search</button>
                </form>
            </header>
            
           
            <Main 
                inpValue = {this.state.inpValue}
                // data = {this.state.data}
                // title = {this.state.title}
                // genre_ids = {this.state.genre_ids}
                // backdrop_path = {this.state.backdrop_path}
                // id = {this.state.id}
                // overview = {this.state.overview}
                // poster_path = {this.state.poster_path}
                // release_date = {this.state.release_date}
                // vote_average = {this.state.vote_average}
                // vote_count = {this.state.vote_count}
            />
        </div>
             
        
       
       
    );
       
}

}