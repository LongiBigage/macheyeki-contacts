import { APISettings } from '../index.js';
export default {
    
    index( ){
        return fetch( APISettings.baseURL + '/contacts', {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },

    store( data ){
        APISettings.headers.set('Content-Type', 'multipart/form-data');
        APISettings.headers.set('Authorization', 'Bearer '+APISettings.token);
    
        return fetch( APISettings.baseURL + '/contacts', {
            method: 'POST',
            headers: APISettings.headers,
            body: data
        } )
        .then( function( response ){
            if( response.status != 201 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    }
}