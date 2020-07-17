class Chatroom {
    constructor(room,username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async addChat (message){
        //format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room : this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        // save the chat docs
        const response = await this.chats.add(chat);
        return response;
    };
    getChats (callback){
        this.chats
        .where('room','==',this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change=>{
                if(change.type==="added"){
                    //uptade ui
                    callback(change.doc.data())
                }
            })
        })
    }
    updateNames(newUsername){
        this.username=newUsername
        localStorage.setItem('username',this.username)
    }
    updateRoom(room){
        this.room=room;
        console.log('room updated');
        this.getChats(data=>chatUi.render(data));
    }
};

//////////////////////////////UI JS//////////////////////////////

class ChatUI{
    constructor(list){
        this.list=list;
    }
    render(data){
        const when = dateFns.distanceInWordsToNow(data.created_at.toDate(),{addSuffix:true})
        const html = `
        <li class="list-group-item">
            <span class="username">${data.username}</span>
            <span class="message">${data.message}</span>
            <div class="time">${when}</div>
        `;
        this.list.innerHTML += html
    }
    clear() {
    this.list.innerHTML = '' ;
    }
}



//////////////////////////////APP JS//////////////////////////////
const chatList = document.querySelector('.chat-list')

const username = localStorage.username ? localStorage.username : "anonymous";


const chatroom = new Chatroom("gaming",username)
const chatUi = new ChatUI(chatList);


chatroom.getChats(data=>chatUi.render(data))

// room change
const roomTarget = document.querySelector('.chat-rooms')
roomTarget.addEventListener('click',e=>{
    if (e.target.getAttribute('id')){
        chatUi.clear();
        chatroom.updateRoom(e.target.getAttribute('id'))
    }
})

// add a new chat
const newChatForm = document.querySelector('.new-chat')
newChatForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message =  newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(e=>newChatForm.reset())
        .catch(err=>console.log(err))
})

// update name

const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
newNameForm.addEventListener('submit',e=>{
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateNames(newName)
    newNameForm.reset()
    updateMssg.innerText=`Your name was updated to ${newName}`
    setTimeout(e=>{
        updateMssg.innerText=""
    },3000)
})

