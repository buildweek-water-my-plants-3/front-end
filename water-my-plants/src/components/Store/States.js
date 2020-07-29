import {atom, selector} from 'recoil';

const userState = atom({
    key: "user",
    default: 
        {username:"guest", phoneNumber:"N/A"}
    
});



const usernameState = atom({
    key: "username",
    default:""
})

const passwordState = atom({
    key: "password",
    default: ""
    
});



const loginState = atom({
    key: "loginState",
    default:
        {username:"", password:""}
})


const phoneNumberState = atom({
    key: "phoneNumber",
    default: ""
});

const plantState = atom({
    key: "plants",
    default: [{ id:'', nickname: 'str', species: 'str', h2oFrequency:'', image: 'str' }],
    
    
});

const plantID = atom({
    key: "platnID",
    default: ""
})

const editPlant = atom({
    key:"editPlant",
    default: {id:"", nickname:"", species:"", h2oFrequency:"", image:""}
})

const idState = atom({
    key: 'id',
    default: ""
})



export { 
    userState
    , passwordState
    , plantState
    , idState
    , loginState
    , phoneNumberState
    , usernameState
    ,editPlant
    ,plantID}

