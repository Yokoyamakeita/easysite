'use strict';
const usernameInp =  document.getElementById('user-name');
const button =  document.getElementById('assessment');
const result =  document.getElementById('result-area');
const tweet =  document.getElementById('tweet-area');

function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}



const answers = [
    '{username}のいいところは声です。{username}の特徴的な声は皆をひきつけ心に残りまず',
    '{username}のいいところはまなざしです。{username}に見つめられたらドキドキしてしまいます',
    '{username}のいいところは情熱です。{username}は周りを感化させるでしょう',
    '{username}のいいところは厳しさです。{username}が物事をいつも成功に導きます',
    '{username}のいいところは知識量の多さです。{username}と話す人はとても楽しいでしょう',
    '{username}のいいところはユニークさです。{username}は周りを楽しませます',
    '{username}のいいところは見た目です。{username}はカリスマの王の素質があるでしょう',
];

button.onclick = () =>{
    const name = usernameInp.value;
    if (name.length ===0){
        return
    }

    removeAllChildren(result);
    const anchor = document.createElement('a');
    const href = 'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href',href);
    anchor.className ='twitter-hashtag-button';
    anchor.setAttribute('data-text','診断結果')
    anchor.innerText = 'Tweet #あなたのいいところ';
    tweet.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src',"https://platform.twitter.com/widgets.js");
    tweet.appendChild(script);

    const header = document.createElement('h3');
    header.innerText='診断結果';
    result.appendChild(header);
    
    const pagegpagh = document.createElement('p');
    const r = assemment(name);
    pagegpagh.innerText = r;
    result.appendChild(pagegpagh);
}

function assemment(username){
    let sumofcharcode = 0;
    for (let i=0;i<username.length;i++){
        sumofcharcode = sumofcharcode+username.charCodeAt(i);
    }


    const index = sumofcharcode%answers.length;
    let result = answers[index];

    result = result.replace(/\{username\}/g,username);

    return result;
}

