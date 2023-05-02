import { API_URL } from "../constants/api-url.constant";

// Fonction pour effectuer une requête GET
const getRequest = async (url, token = null) => {
    const config = {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    if (token) config.headers.Authorization = token;

    return await request(url, config);
};

// Fonction pour effectuer une requête POST
const postRequest = async (url, body = {}, token = null) => {
    const config = {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    if (token) config.headers.Authorization = token;

    return await request(url, config);
};


const putRequest = async (url, body = {}, token = null) => {
    const config = {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    if (token) config.headers.Authorization = token;

    return await request(url, config);
};
const deleteRequest = async (url, token = null) => {
    const config = {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    if (token) config.headers.Authorization = token;

    return await request(url, config);
};

// Fonction générique pour effectuer une requête
const request = async (url, config) => {
    let status = -1;
    let error = null;
    let result = null;

    try {
        // Effectue une requête HTTP avec fetch()
        const response = await fetch(`${API_URL}${url}`, config);
        status = response.status;
        result = await response.json();
    } catch (e) {
        // En cas d'erreur, récupère le message d'erreur
        error = e.message;
    } finally {
        // Retourne un objet contenant le résultat de la requête et les informations associées
        return handleResponse(result, status, error);
    }
};

// Fonction pour traiter la réponse de la requête
const handleResponse = (result, status, error) => {
    const hasError = !result || status >= 400;
    return {
        status,
        result: hasError ? null : result,
        error: hasError ? `Result is null ${error || ""}` : null,
    };
};

// Exporte les fonctions pour les rendre accessibles depuis d'autres fichiers
export { getRequest, postRequest, putRequest, deleteRequest };
