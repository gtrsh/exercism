const uuid = require('uuid');

class Task {
    constructor({
                    id = uuid.v4(),
                    title = "Task Title",
                    description = "A default task description",
                    userId = null,
                    boardId = null,
                    columnId = null,
                    order = 0,
                } = {}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.order = order;
    }

    static toResponse(task) {
        return {...task};
    }
}

module.exports = Task;
