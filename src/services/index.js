import { API } from "../constants/api";

export const fetchUsers = async (text) => {
    const url = `${API.GITHUB_URL}/search/users?q=${text}&client_id=${API.CLIENT_ID}&client_secret=${API.CLIENT_SECRET}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const fetchUser = async (username) => {
    const url = `${API.GITHUB_URL}/users/${username}?client_id=${API.CLIENT_ID}&client_secret=${API.CLIENT_SECRET}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const fetchRepos = async (username) => {
    const url = `${API.GITHUB_URL}/users/${username}/repos?sort=created:asc&client_id=${API.CLIENT_ID}&client_secret=${API.CLIENT_SECRET}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}