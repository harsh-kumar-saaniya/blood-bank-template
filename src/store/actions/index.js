


const set_data = () => {
    return (dispatch) => {
        dispatch({
            type: 'SETDATA', payload: {
                name: 'harish kumar',
                NewEmail: 'harishvithal@outlook.com'
            }
        })
    }
}

export { set_data };