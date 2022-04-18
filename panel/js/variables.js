// const baseUrl = "http://84.95.246.17:8080/fitness-application/"
const baseUrl = "https://bariadmin.barilifestyle.com:2222/fitness-application/"
const uploadUrl = "https://bariadmin.barilifestyle.com:2222/uploader/"

// const baseUrl = "http://192.168.1.106:8080/"
const cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({
        ...accumulator, [key.trim()]: decodeURIComponent(value)
    }), {});
