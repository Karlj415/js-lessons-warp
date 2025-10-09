const usernameInput = document.getElementById('username');
const searchBtn = document.getElementById('searchBtn');
const profileDiv = document.getElementById('profile');

async function fetchGitHubUser(username) {
    profileDiv.innerHTML = '<p class="loading">Loading...</p>';
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) throw new Error('User not found');
        
        const user = await response.json();
        
        profileDiv.innerHTML = `
            <img src="${user.avatar_url}" alt="${user.name}">
            <h2>${user.name || user.login}</h2>
            <p>${user.bio || 'No bio available'}</p>
            <p><strong>Repos:</strong> ${user.public_repos}</p>
            <p><strong>Followers:</strong> ${user.followers}</p>
            <a href="${user.html_url}" target="_blank">View Profile</a>
        `;
    } catch (error) {
        profileDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}

searchBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) fetchGitHubUser(username);
});

usernameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});
