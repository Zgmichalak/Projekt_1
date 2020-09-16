const names = [];

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const name = input.value;
    names.push(name);
    
}

document.querySelector('button').addEventListener('click', addName);