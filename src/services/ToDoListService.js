import   Axios  from "axios"
import { DOMAIN } from "../util/constants/settingSystem";

export class ToDoListService {
    constructor(){

    }
    getTaskApi=() => {
        return Axios({
            url: `${DOMAIN}/ToDoList/GetAllTask`,
            method: 'GET'

        })
    };

    addTaskApi = (taskName)=>{
        return Axios({
            url: `${DOMAIN}/ToDoList/AddTask`,
            method: 'POST',
            data:{
                taskName:taskName
            }
        })
    }

    deleteTaskApi = (taskName) =>{
     return Axios({
        url:`${DOMAIN}/ToDoList/deleteTask?taskName=${taskName}`,
        method:'DELETE'
     })
    }

    checkTaskApi = (taskName) =>{
        return Axios({
           url:`${DOMAIN}/ToDoList/doneTask?taskName=${taskName}`,
           method:'PUT'
        })
       }


       rejectTaskApi = (taskName) =>{
        return Axios({
           url:`${DOMAIN}/ToDoList/rejectTask?taskName=${taskName}`,
           method:'PUT'
        })
       }


}

export const toDoListService = new ToDoListService(); 