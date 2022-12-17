const { createSlice } = require("@reduxjs/toolkit");

export const signup = createSlice({
    name: 'signup',
    initialState: {
        value: []
    },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        }
    }
});

export const {addUser} = signup.actions;
export default signup.reducer;