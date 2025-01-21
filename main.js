

async function fetchGitHubRepos(username) {
  try {
    const response = await fetch(`http://185.185.43.58:3000/api/github/repos?username=${username}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Impossible de récupérer les dépôts:', error);
    return [];
  }
}

  function getLanguageColor(language) {
    const colors = {
      JavaScript: "#f1e05a",
      Python: "#3572A5",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Java: "#b07219",
      "C++": "#f34b7d",
      "C#": "#178600",
      PHP: "#4F5D95",
      Ruby: "#701516",
      TypeScript: "#3178c6",
    };
    
    return colors[language] || "#cccccc";
  }

  

  // Récupérer les informations sur les langages d'un dépôt 
  async function fetchRepoLanguages(owner, repo) {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/languages`;
    try {
      const response = await fetch(`http://185.185.43.58:3000/api/github/languages?owner=${owner}&repo=${repo}`);
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des langages : ${response.status}`);
      }
      const data = await response.json();
      console.log(`Données brutes de l'API pour ${repo.name}:`, data);
      return data;

    } catch (error) {
        displayError(error);
      return {};
    }
  }

  // Calculer son pourcentage
  function calculateLanguagePercentages(languages) {
    const totalBytes = Object.values(languages).reduce((sum, value) => sum + value, 0);
    return Object.entries(languages).map(([language, bytes]) => ({
      language,
      percentage: ((bytes / totalBytes) * 100).toFixed(2),
    }));
  }
  
  
  
  async function displayRepos(repos) {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; 
  
    for (const repo of repos) {
        const languages = await fetchRepoLanguages(repo.owner.login, repo.name);
        console.log(`Langages pour ${repo.name}:`, languages);

        const languagePercentages = calculateLanguagePercentages(languages);
        console.log(`Pourcentages calculés pour ${repo.name}:`, languagePercentages);


        const languageHTML = languagePercentages.map(lang => {
          return `
            <div class="flex items-center">
              <span class="w-1/3 text-sm">${lang.language}</span>
              <div class="w-2/3 rounded">
                <div class="h-2 rounded" style="width: 100%; background-color: red;"></div>
              </div>
              <span class="ml-2 text-sm">${lang.percentage}%</span>
            </div>
          `;
        }).join('');
      
  
        console.log(languageHTML)
        const repoCard = document.createElement('div');
        repoCard.className = 'bg-white p-4 rounded shadow hover:shadow-lg transition';
        repoCard.innerHTML = `
          <h3 class="text-xl font-semibold mb-2">${repo.name}</h3>
          <p class="text-gray-600 mb-3">${repo.description || "Pas de description disponible."}</p>
          <div class="mb-3">${languageHTML}</div>
          <p class="text-sm text-gray-500">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
          <a href="${repo.html_url}" target="_blank" class="text-blue-500 hover:underline self-start">
            Voir sur GitHub
          </a>
        `;
        container.appendChild(repoCard);
    }
  }
  
  // Initialisation
  async function initGitHubSection() {
    const username = "HyGoww"; 
    const repos = await fetchGitHubRepos(username);
    displayRepos(repos);
  }

  function displayError(message) {
    const container = document.getElementById('projects-container');
    container.innerHTML = `<p class="text-red-500">${message}</p>`;
  }
  
  document.addEventListener('DOMContentLoaded', initGitHubSection);
  