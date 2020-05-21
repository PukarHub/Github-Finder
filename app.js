// Init Github
const github = new Github;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input eventListener

 searchUser.addEventListener('keyup', (e)=>{
//  Get Input Text
    const userText =  e.target.value;

    if(userText !== ''){
        // Make Http call 
        github.getUser(userText)
        .then(data => {
            if(data.profile.message == 'Not Found'){
                // Show alert
             ui.showAlert('user not found', 'alert alert-danger');
            }else{
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
        
    } else {
        // clear profile
        ui.clearProfile();
    }
});