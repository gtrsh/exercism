const uuid = require('uuid');
const Column = require('./boards.model.column');

class Board {
    constructor({
                    id = uuid.v4(),
                    title = 'Board Title',
                    columns = [
                        new Column()
                    ],
                } = {}) {
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
}

module.exports = Board;
