const devServer = true;

const HOST = !devServer ? '' : 'http://0.0.0.0';

export const APP_NAME = 'FamPact';
export const API_URL = `${HOST}:8000/api/v1/`;
