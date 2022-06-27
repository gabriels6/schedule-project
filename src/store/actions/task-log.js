function saveTaskLogs(TaskLogs) {
    return {
        type: 'SAVE_TASK_LOGS',
        payload: {
            TaskLogs: TaskLogs
        }
    }
}

const functions = {
    saveTaskLogs
}

export default functions