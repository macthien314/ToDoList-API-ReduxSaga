// import Axios from "axios";
// import { GET_TASK_API } from "../constants/ToDoListConst";


// export const getTaskListApi = () => {
//     //middleware hỗ trợ return về dispatch action 
//     return async dispatch => {
//         try{
//             let {data, status, ...res} = await Axios({
//                 url: 'https://svcy.myclass.vn/api/ToDoList/GetAllTask',
//                 method: 'GET'
//             });
//             if (status === 200)
//             {
//                 dispatch({
//                     type: GET_TASK_API,
//                     taskList:data
//                 })
//             }
//         }
//         catch(err){
//             console.log(err.response.data)
//         }
 
//     }
// }

// export const addTaskApi = (taskName) =>{

//     return async dispatch =>{
//         try{
//         let {data, status} = await Axios({
//             url: 'https://svcy.myclass.vn/api/ToDoList/AddTask',
//             method: 'POST',
//             data: { taskName: taskName }
//         });
//         if(status === 200){
//             //k gọi thẳng getTaskListApi() vì k có tham số dispatch trong useDispatch ở component như gọi trong dispatch
//             dispatch(getTaskListApi())
//         }
//     }catch(err){
//         console.log(err.response.data)
//     }
//     }
// }

// export const delTaskApi = (taskName) => {
//     return dispatch => {
//         let promise = Axios({
//             url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
//             method: 'DELETE'
//         });
//         promise.then(result => {
//             alert(result.data);
//             dispatch(getTaskListApi());
//         });
//         promise.catch(errors => {
//             alert(errors.response.data)
//         })
//     }

    

// }
// export const checkTaskApi = (taskName) => {
//     return dispatch => {
//         let promise = Axios ({
//             url:`https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
//             method:'PUT'
//         });
//         promise.then((result => {
//             alert(result.data);
//             dispatch(getTaskListApi());
//         }));

//         promise.catch(errors => {
//             alert(errors.response.data)
//         })
//     }
  
// }


// export const rejectTaskApi = (taskName) => {
//     return dispatch => {
//         let promise = Axios({
//             url:`https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
//             method:'PUT'
//         });
//         promise.then(result => {
//             alert(result.data)
//             dispatch(getTaskListApi());
//         })

//         promise.catch(errors => {
//             alert(errors.response.data)

//         })
//     }
  
// }