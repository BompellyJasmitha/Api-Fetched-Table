import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

export default class States extends React.Component{
    constructor(props){
                  super(props)
                  this.state={
                    thead:[],
                    tbody:[],
  
                  }
                }
  
  
              
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(x=>x.json())
        .then(x=>{
            this.setState({thead:Object.keys(x[0]).slice(0,4)})
            this.setState({tbody:x}) }) }
          
  render(){
  return(
    <div>
      <table border="2px">
        <thead>
          <tr>
            {this.state.thead.map((x,y)=><th key={y}>{x.toUpperCase()}</th>)}
        </tr>
        </thead>
       <tbody> 
        {this.state.tbody.map((y)=>{
          return(
            <tr key={y.id}>
                    <td>{y.id}</td>
                    <td>{y.name}</td>
                    <td>{y.username}</td>
                    <td>{y.email}</td>
                    </tr>
                  )
                })}
                </tbody>
               </table>
  
            </div>
            )
        }

}
  