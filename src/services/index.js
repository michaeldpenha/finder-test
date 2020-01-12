import { API } from "../constants/api";

export const fetchUsers = async (text) => {
    const url = `${API.GITHUB_URL}/search/users?q=${text}&client_id=9151ecac32660993a6f3&client_secret=caacc8a69ef14fb36de2f22374cf7079705faff7`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const fetchUser = async (username) => {
    const url = `${API.GITHUB_URL}/users/${username}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const fetchRepos = async (username) => {
    const url = `${API.GITHUB_URL}/users/${username}/repos?sort=created:asc`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
    // `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
}