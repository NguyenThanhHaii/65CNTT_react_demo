import React from "react";


export default function TodoCard({task, updateData}){
    return(
        <div className="card nb-3">
            <div className="card-body">
                <p className="card-text">{task.created_at}</p>
                <h5 className="card-title">{task.content}</h5>
                <div className="d-flex gap-2">
                    {task.status_id === 1 ? <button className="btn btn-success" onClick={()=> {updateData(task, 2)}}>Hoàn Thành</button> : null}
                    {task.status_id !== 3 ? <button className="btn btn-danger" onClick={()=> {updateData(task, 3)}}>Hủy</button> : null}
                    {task.status_id === 3 ? <button className="btn btn-primary" onClick={()=> {updateData(task, 1)}}>Làm Mới</button> : null}
                </div>
            </div>
        </div>
    );
}