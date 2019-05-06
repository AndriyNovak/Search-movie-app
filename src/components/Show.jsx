import * as React from 'react';
// const API = "5874acfd11651a28c55771624f7021f4";

export class Show extends React.Component {
    constructor(props,state){
        super(props,state);
        // this.data = Array.from(this.props.data)
        //  this.title = Array.from(this.props.title)
    }
    render(){
        return(
            <div>
                {this.props.title}
                {this.props.genre_ids}
                {this.props.backdrop_path}
                {this.props.id}
                {this.props.overview}
                {this.props.poster_path}
                {this.props.release_date}
                 {/* {this.props.title}
                 {console.log( this.props.title)} */}
                {/* <div>
                    {this.props.title.map((elem,i)=>{
                    console.log(elem);
                    return <div key={i}>{elem}</div>
                    })}
                </div>
                
                <div>
                {this.props.poster_path.map((elem,i)=>{
                    console.log(elem);
                    return  <img key={i} src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`} alt=""/>
                    })}
                   
                </div>  */}


            </div>
                
        )
    }
}
   