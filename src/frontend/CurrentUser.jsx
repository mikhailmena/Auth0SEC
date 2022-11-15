//Displaying text based off username
//Clickable button which logs out user

export const CurrentUser = () => {
    return (

        <div className='userbox'>
        <div username="UserName">Welcome, Smerdj!</div>
        <div className='LogOut' onClick={logoutFunction}>Logout</div>
        </div>
    )
}



function logoutFunction() {
    console.log("good")
}

