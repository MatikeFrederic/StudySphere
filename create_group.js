function createGroup() {
    const groupName = document.getElementById('groupName').value.trim();
    const groupType = document.getElementById('groupType').value;

    if (groupName === '') {
        alert('Please enter a group name.');
        return;
    }

    const groupCode = generateGroupCode();
    const groupCodeElement = document.getElementById('groupCode');

    groupCodeElement.innerText = `Group Name: ${groupName} 
Group Type: ${groupType.charAt(0).toUpperCase() + groupType.slice(1)} 
Code: ${groupCode}`;
    groupCodeElement.style.display = 'block';
}

function generateGroupCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}
