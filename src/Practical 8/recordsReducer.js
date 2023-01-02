export default function recordsReducer(currentRecords, action) {
    /**
     * {
     *      name: "add" | "force add" | "remove",
     *      move: "Rock" | "Paper" | "Scissors",
     *      result: "Win" | "Lose",
     *      index: INTEGER
     * }
     */
    switch (action.name) {
        case 'add': {
            const randomNumber = Math.random();
            let result;
            if (randomNumber <= 1 / 3) result = 'Win';
            else if (randomNumber <= 2 / 3) result = 'Lose';
            else result = 'Draw';
            return [...currentRecords, { result: result, move: action.move }];
        }
        case 'force add': {
            return [...currentRecords, { result: action.result, move: action.move }];
        }
        case 'remove': {
            currentRecords.splice(action.index, 1);
            return [...currentRecords];
        }
        default:
            return currentRecords;
    }
}
