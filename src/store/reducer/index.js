const INITIAL_STATE = {
    user: [
        {
            username: 'harshvithal',
            email: 'harshvithal1@gmail.com'
        },
    ]
}

export default (state = INITIAL_STATE, action) => {
    console.log("this is action data", action.payload);
    switch (action.type) {
        case 'SETDATA':
            return ({
                ...state,
                user: [...state.user, action.payload]
            });
    }
    return state;
};