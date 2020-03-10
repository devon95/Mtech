class Chat {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.users = [];
    this.messages = [];
  }
  addMessage(message) {
    this.messages.push(message)
  }
}

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

class Message {
  constructor(text, time, username) {
    this.text = text;
    this.time = time;
    this.user = username;
  }
}

class MMSMessage extends Message {
  constructor(text, time, user, media) {
    super(text, userId);
    this.media = media;
  }
}

let user = new User('5464455', 'Joe Smith', 'Fresh4Days', 'password')
let user1 = new User('5464456', 'John Doe', 'thepope', 'password2')


let chat = new Chat('chat room', '2345454');
chat.addMessage(new Message('6448484', 'Hi', user1.username))


printChat()

function printChat() {
  const chatElement = document.getElementById('chat');
  let html = `
   <h3>${chat.name}</h3>
   <h4>Messages</h4>
  `;
  chat.messages.forEach(message => {
    html += `<div>${message.username}: ${message.text}</div>`
  })
  chatElement.innerHTML = html;
}

let message = new Message('Hey what\'s up?', new Date(), user)



