import axios from "axios"
function getCookie(name: string) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
export const Login = async (data: object) => {
    const csrf = getCookie("csrftoken")

    return axios.post('api/user/login/', { ...data }, {
        headers: {
            "X-CSRFToken": csrf,
            "Content-Type": "application/json"
        }
    })
}
export const SignUp = async (data: object) => {
    const csrf = getCookie("csrftoken")

    return (await axios.post('api/user/Register/', { ...data }, {
        headers: {
            "X-CSRFToken": csrf,
            "Content-Type": "application/json"
        }
    })).data
}
export const User = async (t: string) => {
    return (await axios.get('/api/user/info/users/', {
        headers: {
            "Authorization": `Token ${t}`,
            "Content-Type": "application/json"
        }
    })).data
}