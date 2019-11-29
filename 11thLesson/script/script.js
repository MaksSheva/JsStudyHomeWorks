let tree = [
    {
    tagName: 'p',
    text: 'Hello World'
},
    {
        tagName: 'section',
        text: 'Hello World 2',
        children: [{
            tagName: 'p',
            text: 'Hello World3',
            children: [{
                tagName: 'span',
                text: 'aaaaa'
            }]
        }]
    }
];

function buildTree(data, target) {
    let nodeElement = target || document.body;

    for (let i =0; i <data.length; i++) {
        let item = data[i];
        console.log(item);

        let newElement = document.createElement(item.tagName);
        nodeElement.appendChild(newElement);
        newElement.innerText = item.text;

        if ('children' in item && Array.isArray(item.children) && item.children.length) {
            buildTree(item.children, newElement);
        }
    }
}

buildTree(tree);
