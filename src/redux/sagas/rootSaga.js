import { all } from "redux-saga/effects";
import * as ToDoListSaga from './ToDoListSaga'
//* import toàn bộ file đổi tên bằng as

export function* rootSaga() {
    yield all([
        //Nghiệp vụ theo dõi các action saga todolist
        ToDoListSaga.theoDoiActionGetTaskApi(),
        //All lưu nhiều saga trong mảng
        ToDoListSaga.theoDoiActionAddTaskApi(),
        ToDoListSaga.theoDoiActionDeleteTaskApi(),
        ToDoListSaga.theoDoiActionCheckTaskApi(),
        ToDoListSaga.theoDoiActionRejectTaskApi(),


    ])
}