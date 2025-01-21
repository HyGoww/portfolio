import React, { useEffect, useState } from 'react';

// Types pour les données des repos, commits et langages
interface Commit {
  author: string;
  message: string;
  date: string;
  logo: string;
}

interface LanguagePercentages {
  language: string;
  percentage: string;
}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  owner: { login: string };
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  languagePercentages: LanguagePercentages[];
  commits: Commit[];
}

function getColor(language: string) {
  const colors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    'C++': '#f34b7d',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    TypeScript: '#3178c6',
  };
  const languageKey = Object.keys(colors).find(
    (key) => key.toLowerCase() === language.toLowerCase()
  ) as keyof typeof colors;
  return languageKey ? colors[languageKey] : '#ccccc';
}

// Composant principal
const FetchGithub: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Récupérer les dépôts GitHub
  async function fetchGitHubRepos(username: string): Promise<Repo[]> {
    try {
      const response = await fetch(
        `http://185.185.43.58:3000/api/github/repos?username=${username}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Impossible de récupérer les dépôts:', error);
      setError('Erreur lors de la récupération des dépôts.');
      return [];
    }
  }

  // Récupérer les commits d'un dépôt
  async function fetchGithubCommits(
    owner: string,
    repo: string
  ): Promise<Commit[]> {
    try {
      const response = await fetch(
        `http://185.185.43.58:3000/api/github/commits?owner=${owner}&repo=${repo}`
      );
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des commits`);
      }
      const data = await response.json();
      const limitedCommits = data.slice(0, 4);
      console.log(limitedCommits);
      return limitedCommits.map((commit: any) => ({
        author: commit.commit.author.name,
        message: commit.commit.message,
        date: commit.commit.author.date,
        logo: commit.author.avatar_url,
      }));
    } catch (error) {
      console.error('Impossible de récupérer les commits:', error);
      setError('Erreur lors de la récupération des commits.');
      return [];
    }
  }

  // Récupérer les langages d'un dépôt
  async function fetchRepoLanguages(
    owner: string,
    repo: string
  ): Promise<{ [key: string]: number }> {
    try {
      const response = await fetch(
        `http://185.185.43.58:3000/api/github/languages?owner=${owner}&repo=${repo}`
      );
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des langages`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Impossible de récupérer les langages:', error);
      setError('Erreur lors de la récupération des langages.');
      return {};
    }
  }

  // Calculer les pourcentages des langages
  function calculateLanguagePercentages(languages: {
    [key: string]: number;
  }): LanguagePercentages[] {
    const totalBytes = Object.values(languages).reduce(
      (sum, value) => sum + value,
      0
    );
    return Object.entries(languages).map(([language, bytes]) => ({
      language,
      percentage: ((bytes / totalBytes) * 100).toFixed(2),
    }));
  }

  // Formatage de la date
  function getDate(isoDate: string): string {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return formattedDate;
  }

  // Afficher les dépôts
  async function displayRepos() {
    const reposData = await fetchGitHubRepos(username);
    const reposWithData = await Promise.all(
      reposData.map(async (repo) => {
        const languages = await fetchRepoLanguages(repo.owner.login, repo.name);
        const languagePercentages = calculateLanguagePercentages(languages);
        const commits = await fetchGithubCommits(repo.owner.login, repo.name);
        return {
          ...repo,
          languagePercentages,
          commits,
        };
      })
    );
    setRepos(reposWithData);
  }

  useEffect(() => {
    displayRepos();
  }, [username]);

  // Retourner l'affichage des dépôts
  return (
    <div className="p-10">
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-xs text-gray-500">
              ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
            </p>
            <p className="text-gray-600 mb-3">
              {repo.description || 'Pas de description disponible.'}
            </p>

            <div className="mt-4 relative">
              {repo.languagePercentages.map((lang) => (
                <div
                  className="flex items-center mb-2 gap-2"
                  key={lang.language}
                >
                  <span className="text-sm w-1/4">{lang.language}</span>

                  <div className="w-1/2 h-2 rounded">
                    <div
                      className="h-2 rounded"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: getColor(lang.language),
                      }}
                    ></div>
                  </div>

                  <span className="text-sm w-1/4 text-right">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col mt-4">
              <h3 className="text-md font-semibold">Derniers commits</h3>
              <ul>
                {repo.commits.map((commit, index) => (
                  <li key={index}>
                    <div className="flex gap-2 items-center">
                      <img src={commit.logo} className="w-4 h-4 rounded-full" />{' '}
                      {commit.message}
                    </div>
                    <p className="text-zinc-500 text-xs">
                      le {getDate(commit.date)} par {commit.author}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <button className="px-4 mt-4 bg-blue-700 rounded">
              <a
                href={repo.html_url}
                target="_blank"
                className="text-zinc-50 hover:underline self-start"
              >
                GitHub
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchGithub;
