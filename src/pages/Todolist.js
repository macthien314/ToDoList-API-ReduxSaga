import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { ADD_TASK_API, CHECK_TASK_API, DELETE_TASK_API, GET_TASKLIST_API, REJECT_TASK_API } from '../redux/constants/ToDoListConst';
const Todolist = (props) => {
    const dispatch = useDispatch();
    //taskList trong redux rỗng nên dispatch api lên redux
    //Gửi action gọi api lên reducer là 1 function nên phải xử lý rồi mới đưa lên
    //Phải xử lý dữ liệu ở giữ trc khi đưa lên reducer vì k bik action thành công hay thất bại
    const {taskList} = useSelector(state => state.ToDoListReducer);

    let [state, setState] = useState({
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        },
    })

    const handleChange = (e)=>{
        let { value, name } = e.target;
        let newValue = { ...state.value };
        newValue = { ...newValue, [name]: value }
        let newErrors = { ...state.errors };
        let regexString = /^[a-z A-Z]+$/;
        if (!regexString.test(value) || value.trim() === '') {
            newErrors[name] = name + ' invalid !';
        } else {
            newErrors[name] = '';
        }

        setState({
            ...state,
            values: newValue,
            errors: newErrors
        })
    }

    const getTaskList = () => {
        //Dispatch action lên saga
        dispatch({
          type:GET_TASKLIST_API,
  
        })
      }
  
      useEffect(() =>{
          //Gọi hàm getTaskList
          getTaskList()
          return ()=>{
      
          }
         },[])
  
      const addTask = (e) => {
          e.preventDefault();
          dispatch({
              type: ADD_TASK_API,
              taskName: state.values.taskName
          })
  
      }
  
  
      //xử lý xong task
      const checkTask = (taskName)=>{
         dispatch({
          type:CHECK_TASK_API,
          taskName: taskName
         })
      }
  
      const delTask = (taskName) => {
        dispatch({
          type:DELETE_TASK_API,
          taskName: taskName
        })
      }
      const rejectTask = (taskName)=>{
         dispatch ({
          type:REJECT_TASK_API,
          taskName:taskName
         })
      }

    const renderTaskToDo = () => {
        return taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type='button' onClick={() => { delTask(item.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type='button' className="complete" onClick={()=>{
                        checkTask(item.taskName)
                    }}>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    const renderTaskToDoDone = () => {
        return taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type='button' onClick={() => {delTask(item.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type='button' onClick={()=>{
                        rejectTask(item.taskName)
                    }}>
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }

    return (
        <div className="card">
                <div className="card__header">
                    <img src={require('./bg.png')} alt='123' />
                </div>
                {/* <h2>hello!</h2> */}
                <form className="card__body" onSubmit={addTask}>
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input name='taskName' id="newTask" type="text" placeholder="Enter an activity..." onChange={handleChange}/>
                            <button className='p-0' type='button' onClick={addTask} id="addItem">
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <p className='text text-danger'>{state.errors.taskName}</p>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo pl-0" id="todo">
                               {renderTaskToDo()}
                            </ul>
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                             {renderTaskToDoDone()}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default Todolist;