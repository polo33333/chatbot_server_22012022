let entity = [
    { _id: 1, name: '$sender_name1', isActive: true, isSystem: true, isEntity: false },
    { _id: 2, name: '$sender_name2', isActive: true, isSystem: true, isEntity: false },
    { _id: 3, name: '$sender_name3', isActive: true, isSystem: true, isEntity: false },
    { _id: 4, name: '$sender_name4', isActive: true, isSystem: true, isEntity: false },
];

let memory = [
    { _id: 1, value: '2' },
    { _id: 2, value: '2' },
    { _id: 3, value: '2' },
    { _id: 4, value: '2' },
    { _id: 5, value: '2' },
    { _id: 6, value: '2' },
]


let content = " gia tri: {{sender_name1}} va {{sender_name1}} va {{sender_name3}}";
function _Replace(a, b, x) {

    let search = `${a}`  
    let replacer = new RegExp(search, 'g')
    return x.replace(replacer, b)
}
console.log(_Replace('{{sender_name1}}', '3', content));