import { fork, take, takeLatest, call, put, delay } from 'redux-saga/effects'
import { ADD_TASK_API, CHECK_TASK_API, DELETE_TASK_API, GET_TASKLIST_API, GET_TASK_API, REJECT_TASK_API } from '../constants/ToDoListConst';
import { toDoListService } from '../../services/ToDoListService'
import { STATUS_CODE } from '../../util/constants/settingSystem';
import { DISPLAY_LOADING } from '../constants/ToDoListConst.js';
import { HIDE_LOADING } from '../constants/ToDoListConst.js';
/* Redux có 2 loại action:
    Loại 1: action => object (action thường)
    Loại 2: action => function (thường dùng để xử lý api hoặc gọi các action khác)
*/


function* getTaskApiAction(action) {
    // while(true){
    //     yield take('getTaskApiAction') //Theo dõi action -> xem action nào dispatch mới làm các công việc bên dưới
    //     console.log('getTaskApi')
    //     //call api dispatch lên reducer
    // }

    // console.log('getTaskApi', action);
    yield put({
        type: DISPLAY_LOADING
    })
    try {


        let { data, status } = yield call(toDoListService.getTaskApi)
        //sau khi lấy giá trị thành công dùng put (giống dispatch bên thunk)
        yield delay(500);
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_API,
                taskList: data
            });
        } else {
            console.log('error')
        }




    } catch (err) {
        console.log('err')
    }
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiActionGetTaskApi() {
    yield takeLatest(GET_TASKLIST_API, getTaskApiAction);
}



function* addTaskApiAction(action) {
    const { taskName } = action;
    //Gọi api
    //Do addTaskApi có tham số nên phải chuyển sang arrow func
    try {
        const { data, status } = yield call(() => { return toDoListService.addTaskApi(taskName) })
        if( status === STATUS_CODE.SUCCESS){
          yield  put({
                type:GET_TASKLIST_API
            })
        }
    } catch (err) {
        console.log(err);
    }
    //Hiển thị loading 
    //Thành công thì load lại task = cách gọi lại action saga load taskList

}

export function* theoDoiActionAddTaskApi() {
    yield takeLatest(ADD_TASK_API, addTaskApiAction)
}


function * deleteTaskApi(action){
    const {taskName} =action;
    try{
        const {data, status} = yield call(()=>{
            return toDoListService.deleteTaskApi(taskName);
        });
       if(status === STATUS_CODE.SUCCESS)
       {
        yield put ({
            type:GET_TASKLIST_API,
            
        })
       }
    }catch(err){
        console.log(err)
    }
}

export function * theoDoiActionDeleteTaskApi (){
    yield takeLatest(DELETE_TASK_API, deleteTaskApi)
}



function * checkTaskApi(action){
    const {taskName} =action;
    try{
        const {data, status} = yield call(()=>{
            return toDoListService.checkTaskApi(taskName);
        });
       if(status === STATUS_CODE.SUCCESS)
       {
        yield put ({
            type:GET_TASKLIST_API,
            
        })
       }
    }catch(err){
        console.log(err)
    }
}

export function * theoDoiActionCheckTaskApi (){
    yield takeLatest(CHECK_TASK_API, checkTaskApi)
}


function * rejectTaskApi(action){
    const {taskName} =action;
    try{
        const {data, status} = yield call(()=>{
            return toDoListService.rejectTaskApi(taskName);
        });
       if(status === STATUS_CODE.SUCCESS)
       {
        yield put ({
            type:GET_TASKLIST_API,
            
        })
       }
    }catch(err){
        console.log(err)
    }
}

export function * theoDoiActionRejectTaskApi (){
    yield takeLatest(REJECT_TASK_API, rejectTaskApi)
}