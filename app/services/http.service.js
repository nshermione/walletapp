
export const http = {
    getJson: function(url) {
        return fetch(url)
            .then(res => res.json());
    },
    postJson: function(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }
};