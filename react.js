// single attribute entry
function customRender(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement)
}
// looping entry
function second(reactElement,mainContainer){
    const domELement = document.createElement(reactElement.type);
    domELement.innerHTML=reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domELement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domELement);
}

const reactElement ={
    type:'a',
    props:{
        href:'http://google.com',
        target: '_blank'
    },
    children: 'click me to reach google'
}
const mainContainer = document.querySelector('#root');
customRender(reactElement,mainContainer)
second(reactElement,mainContainer)