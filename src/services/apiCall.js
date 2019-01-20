const apiCall = (route, method = 'GET', body = {}) => {
    return new Promise((resolve, reject) => {
        const headers = new Headers({
            'content-type': 'application/json'
        });
        const requestDetails = {
            method,
            mode: 'cors',
            headers,
        }

        if (method !== 'GET') {
            requestDetails.body = JSON.stringify(body);
        }
        const serverURL = 'http://entertainmentconsole-env-1.i3dkqynri2.us-east-1.elasticbeanstalk.com';

        const handleErrors = (response) => {
            if (response.ok) {
                return response.json();
            }
        }
        console.log(`${serverURL}/${route}`)
        fetch(`${serverURL}/${route}`, requestDetails)
            .then(handleErrors)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    });
}
export default apiCall;