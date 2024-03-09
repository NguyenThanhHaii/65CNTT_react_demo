import React, { useState } from 'react';
import './App.css';
// import Welcome,{Goodbye} from './components/Welcome.jsx';
import './assets/style.css';
import buttonCss from './assets/button.module.css';
import Todo, { FinishedTodo, CaneledTodo } from './components/Todo.jsx';
import TodoCard from './components/Todo.jsx';

// function App() {

//   const [listData, setListData] = useState(
//    [
//       {
//         id:1,
//         name: 'Giày Trainer Dropset 2.0 Eartch',
//         price: 3500000,	
//         image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b65a2dcc5e4140d09e3cbbaf9b886473_9366/gi%C3%A0y-trainer-dropset-2.0-earth.jpg',
//         description: 'Đây là dataplaceholder của sản phẩm'
//       },
//       {
//         id:2,
//         name: 'Giày Trainer Dropset 2',
//         price: 3500000,	
//         image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f574a527a4b74c20ba62ffada1df754a_9366/gi%C3%A0y-trainer-dropset-2.jpg',
//         description: 'Đây là dataplaceholder của sản phẩm'
//       },
//       {
//         id:3,
//         name: 'Giày Alphabounce+',
//         price: 2400000,	
//         image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/304999ba3dd4461a8da35694b05f2be2_9366/gi%C3%A0y-alphabounce_-sustainable-bounce.jpg',
//         description: 'Đây là dataplaceholder của sản phẩm'
//       },
//       {
//         id:4,
//         name: 'Giày Galaxy 6',
//         price: 1500000,	
//         image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5bc39ff24324facbd765c68a0a3c3e6_9366/gi%C3%A0y-galaxy-6.jpg',
//         description: 'Đây là dataplaceholder của sản phẩm'
//       },
//       {
//         id:5,
//         name: 'Giày GAZELLE',
//         price: 2500000,	
//         image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d3948863a41405eb408674f0eb2b247_9366/gazelle.jpg',
//         description: 'Đây là dataplaceholder của sản phẩm'
//       },
//       {
//         id:6,
//         name: 'Giày Ultraboost 1.0',
//         price: 4500000,	
//         image:'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/462311ac22f9422cbf0e9fa443fabfa2_9366/gi%C3%A0y-ultraboost-1.0.jpg',
//         description: 'Đây là dataplaceholder của sản phẩm'
//       }
//   ]
//   );
//   const renderListData = () => {
//     return listData.map((item, index) => {
//       return  <ProductCard key={item.id} product={item} />;
//     });
//   }
//   return (
//     <div className="App">
//         <p className={buttonCss.myComponent}>Render List Data</p>
//       <div className='row'> {renderListData()}</div>
//     </div>
//   );
// }

function App() {

  const [todos, setTodo] = useState(
    [
      {
        id: 1,
        content: 'Làm bài tập về nhà',
        status_id: 1,
        created_at: new Date().getTime(),
      },
      {
        id: 2,
        content: 'Tập gym',
        status_id: 2,
        created_at: new Date().setHours(2, 0, 0, 4),
      },
      {
        id: 3,
        content: 'Đi coffee',
        status_id: 3,
        created_at: new Date().setHours(2, 0, 0, 4),
      },
      {
        id: 4,
        content: 'Đi bida',
        status_id: 4,
        created_at: new Date().setHours(2, 0, 0, 4),
      },
    ]
  );


  const renderListData = (status_id) => {
    const matchStatusTask = todos.filter(task => {
      return task.status_id === status_id
    })

    const myArray = matchStatusTask.map((task) => {
      return <TodoCard key={task.id} task={task} updateData={updateData}></TodoCard>
    });
    return myArray;
  };


  const updateData = (task, status_id) => {
    const index = todos.findIndex(todo => {
      return todo.id === task.id;
    });

    if (index == -1) {
      alert('khong co phan tu thoa man');
      return;
    }

    let obj = { ...todos[index] };
    obj.status_id = status_id;

    const newArray = [...todos];

    newArray.splice(index, 1, obj);

    setTodo(newArray);
  }
  const [todoContent, setTodoContent] = useState('');

  const handleOnChangeContent = event => {
    const target = event.target;
    const value = target.value;
    setTodoContent(value);
  }

  const submitTodo = () => {
    if(!todoContent.trim()){
      alert('Vui lòng nhập nội dung!');
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      content: todoContent,
      status_id: 1,
      created_at: new Date().getTime()
    }

    const newArray = [...todos, newTodo];
    setTodo(newArray);
    setTodoContent('');
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 nb-3 d-flex gap-2'>
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">Bạn muốn làm gì?</span>
              <input value={todoContent} type="text" class="form-control" aria-describedby="addon-wrapping" onChange={handleOnChangeContent} />
            </div>
            <button className='btn btn-success' onClick={submitTodo}>Luu</button>
          </div>
          <br></br>
          <div className='col-4'>
            <h3 className='bg-primary text-center text_white rounder py-1'>Mới</h3>
            {renderListData(1)}
          </div>
          <div className='col-4'>
            <h3 className='bg-success text-center text_white rounder py-1'>Đã hoàn thành</h3>
            {renderListData(2)}
          </div>
          <div className='col-4'>
            <h3 className='bg-danger text-center text_white rounder py-1'>Đã hủy</h3>
            {renderListData(3)}
          </div>
        </div>
      </div>
      <div style={{ height: '100vh' }}></div>
    </div>

  );
}

export default App;
