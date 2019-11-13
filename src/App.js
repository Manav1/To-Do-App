import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",list:[]
    }
  }
  addItem(toDoValue){
    if(toDoValue!==""){
      const newItem={
        id:Date.now(),
        value:toDoValue,
        isDone:false
      };
      const list=[...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      });
    }
  }
  deleteItem(id){
    const list=[...this.state.list];
    const updatedList=list.filter(item=>item.id!==id);
    this.setState({
      list:updatedList
    });

  }
  updateInput(input){
    this.setState({newItem:input});
  }
  render(){

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src="https://images.idgesg.net/images/article/2019/07/microsoft-to-do-mac-icon-100802168-large.jpg"/>
      <h1>TO DO APP</h1>
      </header>
      <div className="container">
         <h2 className="title">Add a task:</h2>
         <div className="abc">
         <input value={this.state.newItem} onChange={e=>this.updateInput(e.target.value)} className="add-task" placeholder="Add..." required  type="text"/>
         <button className="add-btn" onClick={()=>this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>ADD</button>
         </div>
         </div>
         <div className="list">
          <ul>
            {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                 <input class="inp-ch" type="checkbox" ></input>
                 <span className="task">{item.value}</span>
                 <button className="dlt-btn" onClick={()=>this.deleteItem(item.id)}>Delete</button> 
                 <br/>
                </li>
              )
            })
            }
          </ul>
         </div>
    </div>
  );
  }
}

export default App;
