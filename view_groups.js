// Mock Data: Array of Groups
const groups = Array.from({ length: 100 }, (_, index) => ({
    title: `Group ${index + 1}`,
    description: `This is a description for Group ${index + 1}.`,
    dateCreated: new Date(Date.now() - index * 10000000).toLocaleDateString(),
}));

let currentPage = 1;
const groupsPerPage = 20;

// Function to render groups
function renderGroups(page) {
    const startIndex = (page - 1) * groupsPerPage;
    const endIndex = startIndex + groupsPerPage;
    const groupsToDisplay = groups.slice(startIndex, endIndex);

    const groupsList = document.getElementById('groupsList');
    groupsList.innerHTML = '';

    groupsToDisplay.forEach(group => {
        const groupItem = document.createElement('div');
        groupItem.className = 'group-item';

        groupItem.innerHTML = `
            <div class="group-title">${group.title}</div>
            <div class="group-description">${group.description}</div>
            <div class="group-date">Date Created: ${group.dateCreated}</div>
            <button onclick="joinGroup('${group.title}')">Join Group</button>
        `;

        groupsList.appendChild(groupItem);
    });

    updatePaginationInfo();
}

// Function to handle joining a group
function joinGroup(groupTitle) {
    alert(`You have joined ${groupTitle}!`);
}

// Function to update pagination info
function updatePaginationInfo() {
    const pageInfo = document.getElementById('pageInfo');
    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(groups.length / groupsPerPage)}`;

    // Enable/disable buttons based on current page
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === Math.ceil(groups.length / groupsPerPage);
}

// Pagination controls
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderGroups(currentPage);
    }
}

function nextPage() {
    if (currentPage < Math.ceil(groups.length / groupsPerPage)) {
        currentPage++;
        renderGroups(currentPage);
    }
}

// Initial render
renderGroups(currentPage);
