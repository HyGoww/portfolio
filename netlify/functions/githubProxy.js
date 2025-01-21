const fetch = require('node-fetch');  // Utilisation de require pour importer node-fetch

exports.handler = async function(event, context) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const username = event.queryStringParameters.username;

  if (!username) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Le paramètre 'username' est requis." }),
    };
  }

  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Erreur lors de la récupération des dépôts GitHub' }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur du serveur' }),
    };
  }
};
