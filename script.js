const camelize = strToCamel => {
    return strToCamel
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
};

console.log(camelize("this-is-a-call"));