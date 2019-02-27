import React, { Component } from "react";
import CreateForm from "./components/CreateForm";
import TodoList from "./components/TodoList";

import "./App.css";

class App extends Component {
  id = 3;

  // state 의 초깃값을 설정합니다.
  state = {
    // 그 초깃값은 배열 형태로 넣어주었고, 내부에 기본 값들을 넣어주었습니다.
    todos: [
      {
        id: 0,
        text: "앵귤러 배우고",
        checked: true
      },
      {
        id: 1,
        text: "리액트 배우고",
        checked: false
      },
      {
        id: 2,
        text: "뷰 배우자",
        checked: false
      }
    ]
  };

  handleCreate = text => {
    // 데이터 만들고
    const todoData = {
      id: this.id++,
      text,
      checked: false
    };
    // 데이터를 등록
    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  handleCheck = id => {
    // map 을 통하여 원하는 데이터만 바꿔줍니다.
    const nextTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    this.setState({
      todos: nextTodos
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate} />
        <div className="white-box">
          <TodoList todos={this.state.todos} onCheck={this.handleCheck} />
        </div>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     username: "",
//     job: "",
//     list: []
//   };
//   id = 1;
//   // usernameInput = null;
//   unsernameInput = React.createRef();

//   handleChange = e => {
//     // name 과 value 를 이벤트 객체에서 조회합니다.
//     //   const { value, name } = e.target;
//     //   const update = {}; // 새 객체를 만들고
//     //   update[name] = value; // name 값에 따라 { username: value } 혹은 { job: value } 를 만듭니다.
//     //   this.setState(update);
//     // 뭐로 바뀔지 알 수 있다
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleInsert = e => {
//     e.preventDefault();
//     // 일반 html 방식 등을 작동하지 못하게, 페이지 새로고침 등
//     const { list, username, job } = this.state;
//     this.setState({
//       list: list.concat({ id: this.id, username, job }),
//       username: "",
//       job: ""
//     });
//     this.id += 1;
//     // this.usernameInput.focus();
//     this.usernameInput.current.focus();
//   };

//   handleRemove = id => {
//     const { list } = this.state;
//     this.setState({
//       list: list.filter(item => item.id !== id)
//     });
//     // const index = list.findIndex(item => item.id === id); // id 로 index 를 조회합니다.
//     // const nextList = [...list];
//     // nextList.splice(index, 1);
//     // const nextList = list.slice(); // 배열 내용을 복사합니다
//     // nextList.splice(index, 1); // 배열에서 index 번째 아이템을 제거합니다.
//     // this.setState({
//     //   list: nextList
//     // });
//   };
//   handleKeyPress = e => {
//     if (e.key === "Enter") {
//       this.handleInsert();
//     }
//   };

//   render() {
//     const { username, job, list } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleInsert}>
//           <input
//             placeholder="유저명"
//             name="username"
//             onChange={this.handleChange}
//             value={username}
//             // ref={ref => (this.usernameInput = ref)}
//             ref={this.usernameInput}
//           />
//           <input
//             name="job"
//             onChange={this.handleChange}
//             onKeyPress={this.handleKeyPress}
//             value={job}
//           />
//           <button type="submit">추가</button>
//           <p>
//             {username} 의 직업은 {job}입니다.
//           </p>
//           <ul>
//             {list.map(item => (
//               <li key={item.id}>
//                 {item.username}({item.job}){" "}
//                 <span
//                   style={{ cursor: "pointer" }}
//                   onClick={() => this.handleRemove(item.id)}
//                 >
//                   [삭제]
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
