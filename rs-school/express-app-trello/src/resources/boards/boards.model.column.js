const uuid = require('uuid');

class Column {
    constructor({
                    id = uuid.v4(),
                    title = "Column Title",
                    order = 0,
                } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}

module.exports = Column;
