import * as React from 'react';
const API = "5874acfd11651a28c55771624f7021f4";
export class Main extends React.Component {
    constructor(props,state){
        super(props,state);
        this.state = {
           
       
        }
    }
    
    poster(poster){
        if(poster===null){
            return (<img className="poster" src="/img/noLoad.jpg" alt=""/>);
        }else return(
            <img className="poster" src={`https://image.tmdb.org/t/p/w200/${poster}`} alt=""/>
        )
    }
    
    render(){
        return(
            <main >
               
                {this.props.data.map((elem,i,arr)=>{
                   
                    return (
                       
                            <div key={i} className="filmBlock">                           
                               
                                {this.poster(elem.poster_path)}
                                <div className="overview">
                                    <p className="title"> {elem.title}</p>
                                    <p> {elem.release_date}</p>
                                    {/* {console.log(elem.genre_ids)} */}
                                    {/* <p>{this.gender(elem.genre_ids)}</p> */}
                                    <div className="genders">
                                       
                                    {elem.genre_ids.map((elem,i)=>{
                                        
                                        if(elem===28){
                                            return (<p key={i}>{"Action "}</p>)
                                        }
                                        else if (elem===12){
                                            return (<p key={i}>{"Adventure "}</p>)
                                        }
                                        else if (elem===16){
                                            return (<p key={i}>{"Animation "}</p>)
                                        }
                                        else if (elem===35){
                                            return (<p key={i}>{"Comedy "}</p>)
                                        }
                                        else if (elem===80){
                                            return (<p key={i}>{"Crime "}</p>)
                                        }
                                        else if (elem===99){
                                            return (<p key={i}>{"Documentary "}</p>)
                                        }
                                        else if (elem===18){
                                            return (<p key={i}>{"Drama "}</p>)
                                        }
                                        else if (elem===10751){
                                            return (<p key={i}> {"Family "}</p>)
                                        }
                                        else if (elem===14){
                                            return (<p key={i}>{"Fantasy "}</p>)
                                        }
                                        else if (elem===36){
                                            return (<p key={i}>{"History "}</p>)
                                        }
                                        else if (elem===27){
                                            return (<p key={i}>{"Horror "}</p>)
                                        }
                                        else if (elem===10402){
                                            return (<p key={i}>{"Music "}</p>)
                                        }
                                        else if (elem===9648){
                                            return (<p key={i}>{"Mystery "}</p>)
                                        }
                                        else if (elem===10749){
                                            return (<p key={i}>{"Romance "}</p>)
                                        }
                                        else if (elem===878){
                                            return (<p key={i}>{"Science Fiction "}</p>)
                                        }
                                        else if (elem===10770){
                                            return (<p>{"TV Movie "}</p>)
                                        }
                                        else if (elem===53){
                                            return (<p key={i}>{"Thriller "}</p>)
                                        }
                                        else if (elem===10752){
                                            return (<p key={i}>{"War "}</p>)
                                        }

                                        
                                       
                                       
                                    })}
                                    </div>
                                    <p className="forOverview">{elem.overview}</p>
                                </div>
                               
                            </div>
                            
                        
                        
                        
                    )
                })}
              
            </main>
            
                
        )
    }
}
   
