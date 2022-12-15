// RecordSlice.js
import { createSlice } from '@reduxjs/toolkit';

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

export const recordSlice = createSlice({
    name: 'Record Slice',
    initialState: {
        value: [
            { move: 'Rock', result: 'Win' },
            { move: 'Paper', result: 'Lose' },
            { move: 'Scissors', result: 'Draw' },
        ], // No records initially
    },
    reducers: {
        remove: function (state, action) {
            state.value.splice(action.payload, 1);
        },
        add: function (state, action) {
            // copy-pasted from RockPaperScissors component, remember to copy getRandomInt definition too
            const randomInt = getRandomInt(0, 3);

            let result;
            if (randomInt === 0) result = 'Win';
            else if (randomInt === 1) result = 'Lose';
            else result = 'Tie';

            // action.payload will be the move
            state.value.push({ move: action.payload, result: result });
        },
        forceAdd: function (state, action) {
            state.value.push({ result: action.payload.result, move: action.payload.move });
        },
    },
});

// Use these to update the state in your component
export const { forceAdd, add, remove } = recordSlice.actions;

// This part goes into the store.
export default recordSlice.reducer;
