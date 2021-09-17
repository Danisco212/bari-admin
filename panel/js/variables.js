const baseUrl = "http://84.95.246.17:8080/"

const cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({
        ...accumulator, [key.trim()]: decodeURIComponent(value)
    }), {});
