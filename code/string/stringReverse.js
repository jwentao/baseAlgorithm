// export default (string) => {
//     return string.split(' ').map(item => {
//         return item.split('').reverse().join('');
//     }).join(' ');
// }

// export default (string) => {
//     return string.split(/\s/g).map(item => {
//         return item.split('').reverse().join('');
//     }).join(' ');
// }

export default (string) => {
    return string.match(/[\w"']+/g).map(item => {
        return item.split('').reverse().join('');
    }).join(' ');
}