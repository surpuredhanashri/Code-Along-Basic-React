class App extends React.Component{
    constructor(){
        super();
        this.state ={
            // Name1 : 'Prograd 1',
            // Age1 : '22',
            // Name2 : 'Prograd 2',
            // Age2 : '24'
            isLogged : true, //chechking condition
            details : [
                {id:1, name:"Prograd",age:23},
                {id:2,name:"Prograd jr",age:11}
            ]
        };
    }

    //jsx

    render(){
        return(
        // <div>
        //     <div class="person">
        //         <h1>{this.state.Name1}</h1>
        //         <p>Age: {this.state.Age1}</p>
        //     </div>
        //     <div class="person">
        //         <h1>{this.state.Name2}</h1>
        //         <p>Age: {this.state.Age2}</p>
        //     </div>
        // </div>
        <div>
            {(this.state.isLogged) &&
            this.state.details.map(details => (
                <div key={details.id} className="person">
                    <h1>{details.name}</h1>
                    <p>Age:{details.age}</p>
                </div>
            ))}
        </div>
        );
    } 

}

ReactDOM.render(<App/>,document.getElementById('root'));