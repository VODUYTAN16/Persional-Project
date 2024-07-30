let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active += 1;
    }
    reloadSlider();
}

prev.onclick =  function() {
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active -= 1;;
    }
    reloadSlider();           
}

let refreshSlide = setInterval(() => {
    next.click();
}, 3000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = - checkLeft + 'px';
    // list.appendChild(items[active])

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');

    dots[active].classList.add('active')
    clearInterval(refreshSlide);
    refreshSlide = setInterval(() => {
    next.click();
    }, 3000);

}

dots.forEach((li, key)=> {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})
////////////////////slide 2///////////////

let next2 = document.querySelector('.button .next')
let prev2 = document.querySelector('.button .prev')
let refreshSlide2 = setInterval(()=>{next2.click()}, 3000)
next2.onclick = function(){
    let items = document.querySelectorAll('.slide .item')
    document.querySelector('.slide').appendChild(items[0])
    clearInterval(refreshSlide2)
    refreshSlide2 = setInterval(()=>{next2.click()}, 3000)
}

prev2.addEventListener('click', function(){
    let items = document.querySelectorAll('.slide .item')
    document.querySelector('.slide').prepend(items[items.length - 1])
    clearInterval(refreshSlide2)
    refreshSlide2 = setInterval(()=>{next2.click()}, 3000)
}) 
//////////////////////////comment//////////////////////
// var users = [
//     {
//         id:1,
//         userId: 1,
//         Name: 'Võ Duy X',
//         avatar: 'https://i.pinimg.com/474x/de/16/68/de1668a0b43212ca44ccd274004209b8.jpg',
//     },
//     {
//         id:2,
//         userId: 2,
//         Name: 'Trần Duy H',
//         avatar: 'https://i.pinimg.com/236x/ea/a1/c1/eaa1c1a389a9995ca44e3fd5c2ecd853.jpg',
//     },
//     {
//         id:3,
//         userId: 3,
//         Name: 'Ngô Thị L',
//         avatar: 'https://i.pinimg.com/236x/80/c0/20/80c0209193701aa2d15ab889e343852a.jpg',
//     },
//     {
//         id:4,
//         userId: 4,
//         Name: 'Như Ý',
//         avatar: 'https://i.pinimg.com/236x/d7/7e/83/d77e8333c29b1041868e5db2934fd67b.jpg',
//     },

// ]

// var comments = [
//     {
//         id: 1,
//         userId: 1,
//         comment:'Ôi là trời ơi cái web nó đẹp quá dị ta'
//     },
//     {
//         id: 2,
//         userId: 2,
//         comment:'Cái nền xấu quá, đổi cái ảnh khác đi'
//     },
//     {
//         id: 3,
//         userId: 1,
//         comment:'Xin chào các em nhỏ, là chú đây, có nhớ chú không kjregjoe gegj oejgojrgjoiej giog ejgioejrgioejrg eg engo jojeio greg egjoiegioejgjoeg egjoi ejio3iofg ejgioejgiojeiogoieg egejgoiegjiog egoigoijgiojg  gejgioeiogioejgje gjejgoegjoejgoiaj g aoeegoiejgioiaojg sgojioejgoiege goiejagoj'
//     },
//     {
//         id: 4,
//         userId: 4,
//         comment:'Ôi là!!!!!!!111 Cái web cũng coi được quá nè, xịn 100 đ, tiếp tục phát huy nha'
//     }
// ]

// function getComments(){
//    return  new Promise(
//         function(resolve, reject){
//             resolve(comments)
//         }
//     )
// }

// function getUserByUserId(UserIds){
//     return new Promise(
//         function(resolve, reject){
//            var listUser =  users.filter((user)=>{
//                 return UserIds.includes(user.userId)
//             })
//             resolve(listUser)
//         }
//     )
// }
// getComments().then(
//     function(comments){
//         var userIds = comments.map((comment)=>{
//             return comment.userId
//         })

//        return  getUserByUserId(userIds).then(
//         function(users){
//             return {
//                 users:users,
//                 comments: comments
//             }
//         }
//        )}
// ).then(
//     function(data){
//         var commentElement = document.querySelector('.update-comment')
//         var html = '';
//         data.comments.forEach((comment)=>{
//             var user = data.users.find((user)=>{
//                 return user.userId == comment.userId
//             })

//         html += `<li class="user-comment">
//                             <div class="head-user">
//                                 <img  class="avatar" src="${user.avatar}" alt="">
//                                 <div class="name">${user.Name}</div>
//                             </div>
//                             <div class="des">${comment.comment}</div>
//                         </li>`
//         })
//         commentElement.insertAdjacentHTML('afterbegin', html);
//     }
// )
////////////////////////////DIalog/////////////////////
var dialog = document.querySelector('.dialog')
var button = document.getElementById('active-dg')

button.onclick = function(){
    dialog.classList.add('active-dialog')
}
window.onclick = function(event) {
    if (event.target == dialog) {
        dialog.classList.remove('active-dialog')
    }
}


//////////////////////////////////////////FORM//////////////////////

// let username = document.getElementById('username')
// let email = document.getElementById('email')
// let password = document.getElementById('password')
let signin = document.querySelector('.form form')
var usm = '', em = '', pw = ''; 

// username.oninput = function(event){
//     usm = event.target.value;
//     console.log(usm)
// }
// email.oninput = function(e){
//     em = e.target.value;
//     console.log(em)
// }
// password.oninput = function(e){
//     pw = e.target.value;
//     console.log(pw)
// }
signin.addEventListener('submit',function(e){
    e.preventDefault();
    
     usm = signin.username.value;
    const em = signin.email.value;
    const pw = signin.password.value;
    // const img = signin.avatar.value;

    fetch('http://localhost:3000/account')
    .then(function(respone){
        return respone.json();
    }).then(function(result){
        let users = result.find(function(user){
            // console.log(user.username.toLowerCase().trim())
            return (user.username.toLowerCase().trim() == usm.toLowerCase().trim())
        })

        if(users){
            if(users.email == em){
                if(users.password == pw){
                    alert('Sign in success')
                    document.querySelector('.dialog .left .name').textContent = `${users.name}`
                    document.querySelector('.account .name').innerText = `${users.name}`
                    document.querySelector('.account .avatar').style = `background-image: url('${users.avatar}')`
                    document.querySelector('.dialog .avatar').style = `background-image: url('${users.avatar}')`
                }else {alert('Sai Mật Khẩu rồi')}
            }else{
                alert('Sai Email rồi')
            }
        }else{
            alert('Sai username rồi')
        }
    }).catch(function(){
        alert('Loi dang nhap')
    })
})

let eye = document.getElementById('eye');
eye.addEventListener('click', ()=>{
    eye.classList.toggle('fa-eye-slash');
    eye.classList.toggle('fa-eye');
    const type = document.getElementById('password').getAttribute('type') === 'password' ? 'text' : 'password';
    document.getElementById('password').setAttribute('type', type)
})
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone:: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"

//////////////////////////
const comments = 'http://localhost:3000/comment'
const users = 'http://localhost:3000/account'
var C = new Promise((resolve)=>{
    fetch(comments)
    .then(function(response){
        return response.json();
    }).then((response)=>{
        resolve(response)
    })
})

var U =  new Promise((resolve)=>{
    fetch(users)
    .then(function(response){
        return response.json();
    }).then((response)=>{
        resolve(response)
    })
})


function start(){
    ////getData///
  Promise.all([U, C])
    .then(([users, comments])=>{
        var data = {
            users:users,
            comments:comments
        }
        renderComment(data)
    })
    handleCreateComment();
}
start()



function renderComment(data){
    var commentElement = document.querySelector('.update-comment')
    html = ''
    data.comments.forEach((comment)=>{
        var user = data.users.find((user)=>{
            return user.username == comment.username;
        })
        var avatar = user? user.avatar: 'https://i.pinimg.com/564x/a2/d3/ab/a2d3abc2a101da0b7592aeecf026d027.jpg';
        var name = user? user.name:'FullName';
        
        html += `<li class="user-comment">
                    <div class="head-user">
                        <img  class="avatar" src="${avatar}" alt="">
                        <div class="name">${name}</div>
                    </div>
                    <div class="des" contenteditable="true">${comment.content}</div>
                    <button onclick = "deleteComment(${comment.id})">Xoa</button>
                    <button class="edit" onclick = "editComment(${comment.id})">Edit</button>
                </li>`
    })
    commentElement.innerHTML = html;
}

function createComment(comment){
    var option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(comment)
        
    }

    fetch(comments, option)
    .then((response)=>{
    })
}

function handleCreateComment(){
    var createbtn = document.querySelector('.feedback form')
    createbtn.addEventListener('submit',function(event){
        event.preventDefault()
        var newComment = document.querySelector('input[name="comment"]').value;
        fetch(comments)
        .then((response)=>{

            return response.json()

        }).then((a)=>{
            console.log(a)
            if(a[0]){
                var id = Number(a[a.length - 1].id) + 1;
                id = id.toString();
            }else{
                var id = "1";
            }
            let username = usm ? usm: '';
            var comment = {
                id: id,
                username:username,
                content:newComment
            }
            createComment(comment)
        })
    })
}
/////////////DeleteComment/////////
function deleteComment(id){
    var option = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    }
    fetch(comments + '/' + id, option)
}

///////////EditrComment///////////
function editComment(id){
    document.querySelector('.edit').addEventListener('click',(e)=>{
        e.preventDefault();
        var newComment = document.querySelector('.user-comment .des').innerText;
        var comment = {
            content:newComment
        }
        var option = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment)
        }
    
        fetch(comments + '/' + id, option) 
    })
}
