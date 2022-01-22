var element = document.querySelector(".floating-chat");
var myStorage = localStorage;
var _protocol = 'http://localhost:3000/api/ai';
var _path = '';
var __iconBot = '';
var botId = document.currentScript.getAttribute('data-botId');
var token = '';
var senderId = senderId == null ? createUUID() : senderId;
var obj = {
    event_name: 'user_send_text',
    message: '',
    senderId: senderId,
    botId: botId,
    token: token
}


var sayHello = '';
var title = '';
var flag = false;

if ("webkitSpeechRecognition" in window) {

    // Speech Recognition Stuff goes here

} else {
    console.log("Speech Recognition Not Available")
}




window.onload = function () {

    // navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
    //     window.localStream = stream; // A
    //     window.localAudio.srcObject = stream; // B
    //     window.localAudio.autoplay = true; // C
    // }).catch( err => {
    //     console.log("u got an error:" + err)
    // });

    var speech = new SpeechRecognitionApi();

    

    document.querySelector('#btn-record').addEventListener('click', function () {
        if(!flag){
            document.getElementById("btn-record").style.color="red";
            flag = true;
            speech.init();
        }
        else{
            document.getElementById("btn-record").style.color="black";
            flag = false;
            speech.stop()
        }
    })

    // document.querySelector('.btn-stop').addEventListener('click', function () {
    //     speech.stop()
    // })

}

function render_chatbox(data) {
    _protocol = data.__baseUrl + '/api/ai';
    _path = data.__baseUrl;
    _iconBot = data.__iconBot;
    botId = data.__botId;
    token = data.__token;
    sayHello = data.__sayHello;
    title = data.__title;

    obj.token = data.__token;
    obj.botId = data.__botId;

    if (document.readyState != 'loading') {
        drawChatBox();

    } else {
        document.addEventListener('DOMContentLoaded', drawChatBox);
    }

}


function openElement() {

    var textInput = element.querySelector('.text-box');

    element.querySelector('i').style.display = "none";
    element.classList.add('expand');
    element.querySelector('.chat').classList.add('enter');
    // var strLength = textInput.value.length * 2;
    textInput.addEventListener("keydown", (e) => { onMetaAndEnter(e) })

    //element.addEventListener('click', openElement);
    element.querySelector('.header button').addEventListener("click", (e) => {
        closeElement();
    });
    //element.querySelector('.header button').addEventListener('click', closeElement);
   // element.querySelector('#sendMessage').textContent = 'Gửi';
    element.querySelector('#sendMessage').addEventListener("click", (e) => {
        sendNewMessage();
    });

}

function closeElement() {

    setTimeout(function () {
        var chat = element.querySelector(".chat");
        chat.classList.remove('enter');
        element.classList.remove('expand');

        element.querySelector('i').style.display = '';
        element.querySelector('.header button').removeEventListener('click', closeElement);
        element.querySelector('#sendMessage').removeEventListener('click', sendNewMessage);
        element.querySelector('.text-box').removeEventListener('keydown', onMetaAndEnter);
        element.addEventListener('click', openElement);
    }, 100);
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

async function sendNewMessage() {
    let userInput = document.querySelector('.text-box');
    let newMessage = userInput.value.replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

    if (!newMessage) return;

    let messagesContainer = document.querySelector('.messages');

    let link = document.createElement('li');
    link.className = 'other';
    link.innerHTML = `${newMessage}`;
    messagesContainer.appendChild(link);

    // clean out old message
    userInput.value = '';
    // focus on input
    userInput.focus();

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    obj.message = newMessage;

    let response = await fetch(_protocol + '/Bots/' + botId + '/Guest/Webhook', {
        method: 'POST',
        body: JSON.stringify(obj), // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    if (myJson)
        receiveMessage(myJson);

}

async function getFirstMessage(message) {
    obj.message = message;

    let response = await fetch(_protocol + '/Bots/' + botId + '/Guest/Webhook', {
        method: 'POST',
        body: JSON.stringify(obj), // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    if (myJson)
        receiveMessage(myJson);
}

async function receiveMessage(message) {
    if (message != undefined)
    if(message.data != undefined)
        for (let i = 0; i < message.data.length; i++) {
            let el = message.data[i];
            //console.log(el)
            if (el.template_type == 'text') {
                textMessage(el);
            }

            if (el.template_type == 'media' && el.image_url != undefined) {
                mediaMessage(el);
            }
            if (el.template_type == 'list') {
                listMessage(el);
            }

            await delay(1000);

        }

}

function drawbutton(buttons) {
    let temp = '';
    //console.log(buttons)
    if (buttons != undefined)
        for (let i = 0; i < buttons.length; i++) {
            let el = buttons[i];
            if (el.type == "url")
                temp += `<button type="button" onclick="gotoUrl('${el.url}')"> ${el.title}</button>`
            if (el.type == "callback")
                temp += `<button type="button" onclick="callBack('${el.redirectToBlock}','${el.key}','${el.value}')"> ${el.title}</button>`
        }

    return temp;
}

async function textMessage(text) {

    let userInput = document.querySelector('.text-box');
    let newMessage = text.content;

    if (!newMessage) return;

    let messagesContainer = document.querySelector('.messages');
    let link = document.createElement('li');
    link.className = 'self';

    //document.querySelector('.self').style.setProperty("background", "red");
    link.innerHTML = `${newMessage}` + drawbutton(text.button);

    messagesContainer.appendChild(link);
    // clean out old message
    userInput.innerHTML = '';
    // focus on input
    userInput.focus();

    // clean out old message
    userInput.innerHTML = '';
    // focus on input
    userInput.focus();

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    loadIcon();
}

async function mediaMessage(media) {

    let userInput = document.querySelector('.text-box');
    let newMessage = media;

    if (!newMessage) return;

    let messagesContainer = document.querySelector('.messages');
    let link = document.createElement('li');
    link.className = 'self';

    link.innerHTML = `<img src=" ${_path}${media.image_url}"/>` + `<span>${media.title}</span>` + drawbutton(media.button);
    messagesContainer.appendChild(link);
    // clean out old message
    userInput.innerHTML = '';
    // focus on input
    userInput.focus();
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    loadIcon();
    await delay(1000);
}

async function listMessage(el) {

    let userInput = document.querySelector('.text-box');


    for (let i = 0; i < el.elememts.length; i++) {
        let el2 = el.elememts[i];
        let link = document.createElement('li');
        link.className = 'self';

        if (el2.subtitle != null) {
            link.innerHTML = `<img src=" ${_path}${el2.image_url}"/>` + `<h3>${el2.title}</h3>` + `<span>${el2.subtitle}</span>` + drawbutton(el2.button);
        }
        else {
            link.innerHTML = `<img src=" ${_path}${el2.image_url}"/>` + `<h3>${el2.title}</h3>` + drawbutton(el2.button);
        }

        let messagesContainer = document.querySelector('.messages');
        messagesContainer.appendChild(link);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        loadIcon();
        await delay(1000);
    }

    // clean out old message
    userInput.innerHTML = '';
    // focus on input
    userInput.focus();
}

function onMetaAndEnter(event) {
    if (event.keyCode == 13) {
        sendNewMessage();
    }
}

function gotoUrl(url) {
    window.open(url, '_blank');
}

async function callBack(block, key, value) {

    let obj = {
        event_name: 'user_send_text',
        message: `{"redirectToBlock": "${block}" , "key": "${key}", "value":  ${value}}`,
        senderId: senderId,
        botId: botId,
        token: token
    }

    let response = await fetch(_protocol + '/Bots/' + botId + '/Guest/Webhook', {
        method: 'POST',
        body: JSON.stringify(obj), // string or object
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    if (myJson)
        receiveMessage(myJson);

}

const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});


function drawChatBox() {

    let el = document.querySelector('#chat_container_id');
    let headerTemplate = '<div class=\'floating-chat\'>';
    headerTemplate += '<i class=\'fa fa-comments\' aria-hidden=\'true\' style=\'font-size:xx-large\'></i>';
    headerTemplate += '<div class=\'chat\'>' + '<div class=\'header\'>' + '<span class=\'title\'>' + title + '</span>' + '<button>' + '<i class=\'fa fa-times-circle\' aria-hidden=\'true\' style=\'font-size:x-large\'></i>' + '</button>' + '</div>';
    headerTemplate += '<ul class=\'messages\'>' + '</ul>';
    headerTemplate += '<div class=\'footer\'>' + ' <input class=\'text-box\' placeholder=\'Nhập tin nhắn, nhấn enter để gửi..\'>' + '<button id=\'btn-record\'>'+'<i class=\'fa fa-microphone\' aria-hidden=\'true\' style=\'font-size:x-large\'></i>'+'</button>' + '<button id=\'sendMessage\'>&#10146;</button>' + '</div>' + '</div>' + '</div>';

    el.innerHTML = headerTemplate;
    document.body.appendChild(el);


    element = document.querySelector('.floating-chat');
    //loadIcon();

    setTimeout(function () {
        element.classList.add('enter');
    }, 1000);

    element.addEventListener("click", (e) => {
        openElement();
    });

    getFirstMessage('hi');
}

function loadIcon() {
    let temp = document.querySelectorAll('.self');

    // for (let i = 0; i < temp.length; i++) {
    //     let el = temp[i];
    if (_iconBot != '')
        temp[temp.length - 1].style.setProperty("--background", `url(${_iconBot})`);
    else
        temp[temp.length - 1].style.setProperty("--background", "url('../images/bot.png')");
    // }

}

class  SpeechRecognitionApi {
      constructor(options)  {
        const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
        this.speechApi = new SpeechToText();
        this.speechApi.continuous = true;
        this.speechApi.interimResults = false;
        this.speechApi.lang = 'vi-VN';
        //this.output = options.output ? options.output : document.createElement('div');
        //console.log(this.output)
        this.speechApi.onresult = async (event) => {
            //console.log(event);
            var resultIndex = event.resultIndex;
            var transcript = event.results[resultIndex][0].transcript;

            //console.log('transcript>>', transcript);
            obj.message = transcript;

           
            document.querySelector('.text-box').value = transcript;
            let userInput = document.querySelector('.text-box');
            let newMessage = userInput.value.replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

            if(newMessage){
                document.getElementById("btn-record").style.color="black";
                flag = false;
                this.speechApi.stop();
              }

            // let response = await fetch(_protocol + '/Bots/' + botId + '/Guest/Webhook', {
            //     method: 'POST',
            //     body: JSON.stringify(obj), // string or object
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });
            // let myJson = await response.json(); //extract JSON from the http response
            // // do something with myJson
            // if (myJson)
            //     receiveMessage(myJson);


        }
    }
    init() {
        this.speechApi.start();
    }
    stop() {
        this.speechApi.stop();
    }
}