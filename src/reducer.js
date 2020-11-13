const initState = {
    Jedi: [
        { id: 1, name: 'Luke Skywalker' },
        { id: 2, name: 'Obi-Wan Kenobi' },
    ],
    Sith: [
        { id: 1, name: 'Emperor Palpatine' },
        { id: 2, name: 'Darth Vader' },
    ]
}

const reducer = (state = initState, action) => {
    return state;
}

export default reducer;